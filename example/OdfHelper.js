/****
// javascript file: /server/OdfHelper.js
// purpose: Contains a class used to provide macro functionality for simple-odf
// Copyright(C) 2017 friendlyGIS GmbH,
// Gerhard Höger-Hansen, Germany
// http://www.friendlygis.com
// info@friendlygis.com
// https://github.com/GerhardHH
// ----
// Description:
This class is used to generate reports
*/
import simpleOdf from 'simple-odf';
import { Parser } from 'htmlparser2';
import sizeOf from 'image-size';
import { Stack } from '/lib/Stack';
// set some shortcuts
const TextDocument = simpleOdf.TextDocument;
const Paragraph = simpleOdf.Paragraph;
const Heading = simpleOdf.Heading;
const List = simpleOdf.List;
const DirectionType = simpleOdf.DirectionType;
const ParagraphStyle = simpleOdf.ParagraphStyle;
const TableCellStyle = simpleOdf.TableCellStyle;
const Typeface = simpleOdf.Typeface;
const FontPitch = simpleOdf.FontPitch;

/**
* Using a dataUrl (something like "data:image/png;base64,...."),
* figure out the pixel size of the image and the type.
*/
function getImageSizeSync(dataUrl) {
  var base64 = dataUrl.split(',')[1];
  var buf = new Buffer(base64,'base64');
  var size = sizeOf(buf);
  return size;
}

/**
Helper class for generating ODF documents.
Generates a simple-odf document in property "doc" on instantiation.
Allows to generate a document as if it was written from scratch.

*/
export class OdfHelper {
  /**
  Makes a new helper object
  Inits properties:
  ** doc - the document we write on (simple-odf.TextDocument)
  ** cdp - current document part, initially the same as doc
  ** cTable - initially undefined, will hold a structure of
  ** table - the table object
  ** row - the row object
  ** cell - the cell object
  ** numCols - the number of columns
  ** currentCol - the current column (start with 1)
  ** multi - a counter for multi-rows. Is used to determine the cell style.
  ** lines - true if lines should be used, else false. Default is true.
  */
  constructor() {
    this.doc = new TextDocument();
    this.cdp = this.doc;
    this.cTable = undefined;
    this._setupStyles();
    var left = DirectionType.left;
    var right = DirectionType.right;
    TableCellStyle.defaultPadding = {
      left: '1.5mm',
      right: '1.5mm',
    }
    Paragraph.defaultStyle = this.standardStyle;
  }

  /**
  Add a paragraph in standard style
  @param {string} text - the text of the paragraph
  @param {ParagraphStyle} style - if provided, use this paragraph style.
  @return {Paragraph} the generated Paragraph
  */
  addParagraph( text, style=undefined ) {
    // add a paragraph with fixed text, used for code
    const p = new Paragraph(text);
    if (style) {
      p.setStyle(style);
    }
    this.cdp.append(p);
    return p;
  }

  /**
  Add a paragraph in code style
  @param {string} text - the text of the paragraph
  */
  addCodeParagraph( text ) {
    // add a paragraph with fixed text, used for code
    const p = new Paragraph(text);
    p.setStyle( this.codeStyle );
    this.cdp.append(p);
    return p;
  }

  /**
  Adds a Heading
  @param {string} text - the heading text
  @param {number} level - the level, starting with 1
  */
  addHeading(text, level=1) {
    this.cdp.addHeading(text, level);
  }

  /**
  Start a table with numCols columns. Before the table can be filled,
  use addHeadRow() or addRow() to start a row
  @param {number} numCols - the number of columns
  @param {boolean} lines - if the table should use lines, default is true
  @param {string} padding - the overall padding, defaults to '1pt'
  @param {string} padLeft - the left padding to apply
  @param {string} padTop - the top padding to apply
  @param {string} padRight - the right padding to apply
  @param {string} padBottom - the bottom padding to apply
  */
  beginTable(numCols, lines=true, padding='1pt', padLeft, padTop, padRight, padBottom) {
    if (this.cTable) {
      console.log('Warning: Adding table while table is not closed!')
    }
    // set the default padding
    const pad = {};
    if (padding) { pad[DirectionType.all] = padding };
    if (padLeft) { pad[DirectionType.left] = padLeft };
    if (padTop) { pad[DirectionType.top] = padTop };
    if (padRight) { pad[DirectionType.right] = padRight };
    if (padBottom) { pad[DirectionType.bottom] = padBottom };
    TableCellStyle.defaultPadding = pad;
    console.log('Set default padding');
    console.log(pad);
    this.cTable = {
      table: this.doc.addTable(numCols),
      row: undefined,
      cell: undefined,
      numCols: numCols,
      currentCol: 1,
      multi: 0,
      lines: lines,
    }
    Paragraph.defaultStyle = this.tableStyle;
  }

  /**
  Set relative width from an array of numbers. If the size of the array
  does not match the number of columns in the current table, excess values
  will be ignored, missing values not set!
  @param {array} widths - an array of numbers
  */
  setTableColWidthsRel( widths ) {
    if (!this.cTable) {
      throw new Error('Tried to set columnd widths table declared!');
    }
    var colDefs = this.cTable.table.colDefs;
    colDefs.forEach(function(cd,i) {
      if (i < widths.length) {
        cd.getStyle().setRelativeWidth(widths[i]);
      }
    });
  }

  /**
  Set absolute width from an array of strings with units. If the size of the array
  does not match the number of columns in the current table, excess values
  will be ignored, missing values not set!
  @param {array} widths - an array of strings like '3.4cm'
  */
  setTableColWidths( widths ) {
    if (!this.cTable) {
      throw new Error('Tried to set columnd widths without table declared!');
    }
    var colDefs = this.cTable.table.colDefs;
    colDefs.forEach(function(cd,i) {
      if (i < widths.length) {
        cd.getStyle().setWidthString(widths[i]);
      }
    });
  }

  /**
  Add a header row. After call, the cell in the first column is the current
  document part (cdp). Use addColumn() to switch to the next columns.
  @param {array} data - optional an array of header entries, if omitted,
  just a first column is added
  */
  addHeadRow(data=[]) {
    var ctx = this;
    if (!this.cTable) {
      throw new Error('Tried to add row without table declared!');
    }
    this.cTable.row = this.cTable.table.addRow();
    Paragraph.defaultStyle = this.tableHeaderStyle;
    this.cTable.currentCol = 0;
    this.cTable.multi = 0;
    if (data.length) {
      // add columns if data provided
      data.forEach(function(str) {
        ctx.addColumn();
        ctx.addParagraph(str);
      })
    } else {
      // add the first column
      this.addColumn();
    }
  }

  /**
  Add a header row. After call, the cell in the first column is the current
  document part (cdp). Use addColumn() to switch to the next columns.
  @param {array} data - optional an array of header entries, if omitted,
  just a first column is added
  @param {number} multi - if not 0, start a multi row. A multi row is displayed
  as a number of rows surrounded by a thick line, with only vertical lines inside.
  */
  addRow(data=[], multi=0) {
    var ctx = this;
    if (!this.cTable) {
      throw new Error('Tried to add row without table declared!');
    }
    this.cTable.row = this.cTable.table.addRow();
    Paragraph.defaultStyle = this.tableStyle;
    this.cTable.currentCol = 0;
    if (multi) {
      // we set multi to the negative number, meaning that
      // we are on the first row of a multi row.
      this.cTable.multi = multi * -1;
    } else if (this.cTable.multi) {
      // if multi is negative, make it positive, and decrease it
      this.cTable.multi = Math.abs(this.cTable.multi) - 1;
    }
    if (data.length) {
      // add columns if data provided
      data.forEach(function(str) {
        ctx.addColumn();
        ctx.addParagraph(str);
      })
    } else {
      // add the first column
      this.addColumn();
    }
  }

  /**
  Add a column. After this, the next column in the current row is the
  current document part (cdp). Be aware that columns exceeding the number
  of columns given in startTable() will be ignored.
  */
  addColumn() {
    if (!this.cTable) {
      throw new Error('Tried to add column without table declared!');
    }
    this.cTable.currentCol++;
    // console.log('col: ' + this.cTable.currentCol + ', numCols: ' + this.cTable.numCols);
    if (this.cTable.currentCol <= this.cTable.numCols) {
      this.cTable.cell = this.cTable.row.addCell();
      this.cdp = this.cTable.cell;
      if (this.cTable.lines) {
        // determine the style. If multi is set, the meaning is:
        // < 0 - the first row of a multi row
        // >1 - an intermediate row of a multi row
        // 1 - the last row of a multi row
        // 0 - no multi row
        var rowType = 0;
        if (this.cTable.multi < 0) {
          rowType = 1;
        } else if (this.cTable.multi > 1) {
          rowType = 2;
        } else if (this.cTable.multi === 1) {
          rowType = 3;
        }
        var colType = 2;
        if (this.cTable.currentCol === 1) {
          colType = 1;
        } else if (this.cTable.currentCol === this.cTable.numCols) {
          colType = 3;
        }
        const styleKey = 'cst' + rowType + colType;
        this.cTable.cell.setStyle(this[styleKey]);
      }
    }
  }

  /**
  Ends the table. The current document part (cdp) will be switched back
  to the main document.
  */
  endTable() {
    this.cTable = undefined;
    Paragraph.defaultStyle = this.standardStyle;
    this.cdp = this.doc;
  }

  addHTML(htmlString, level) {
    // parse the htmlString and add paragraphs, headers etc.
    // level makes the first level of headers.
    // string may be a HTML string with tags like <h1> or <p>
    // we do not use the shortcut methods like addParagraph,
    // so doc might be a sub-element like TableCell
    var cdp = this.cdp;
    if (htmlString && !htmlString.startsWith( '<' ) ) {
      var p = new Paragraph(htmlString || '');
      cdp.append(p);
      return;
    }
    var headers = {
      'h1': level,
      'h2': level + 1,
      'h3': level + 2,
      'h4': level + 3,
      'h5': level + 4,
    }
    var lastText = undefined;
    var currList;
    var tags = new Stack();
    const outputText = function() {
      // output text stored in lastText with the correct
      // tag
      var txt = lastText || '';
      if (tags.size) {
        var tagName = tags.peek();
        if (!tagName) {
          console.log('Warning: tagName is empty, size=' + tags.size);
          return;
        }
        if (tagName.startsWith('h')) {
          // for headers, make an addHeader
          var h = new Heading(txt, headers[tagName]);
          cdp.append(h);
          // console.log('h: ' + txt)
        } else if (tagName === 'p') {
          // p gets a normal paragraph
          var p = new Paragraph(txt);
          cdp.append(p);
          // console.log('p: ' + txt)
        } else if (tagName === 'li') {
          currList.addItem(txt);
          // console.log('i: ' + txt)
        }
      }
      if (lastText) {
        lastText = undefined;
      }
    };
    const putText = function(str) {
      // replace or append lastText
      if (str) {
        if (lastText) {
          lastText = lastText + str;
        } else {
          lastText = str;
        }
      }
    }
    var parser = new Parser({
      onopentag: function(name, attribs) {
        // at the moment, we treat ol like ul, until we
        // have the chance to produce ordered lists in documents
        if (name === 'ul' || name === 'ol') {
          currList = new simpleOdf.List();
          cdp.append(currList);
        }
        outputText();
        tags.push(name);
      },
      ontext: function(text) {
        // remember the text for output
        putText(text);
      },
      onclosetag: function(name) {
        // if the tag is a <br/>, add a newline to text, else output text
        if (name === 'br') {
          putText('\n');
        } else {
          outputText();
        }
        tags.pop();
      }
    }, {decodeEntities: true});
    parser.write(htmlString || '');
    parser.end();
  }

  /**
  * Add the image represented by an image data string as an image in the document.
  */
  addImageData(imageData, width, height=undefined) {
    var p = this.cdp.addParagraph();
    var st = new simpleOdf.ImageStyle()
    st.setWidth(width);
    if (height) {
      // in case height is provided, no need to calculate it
      st.setHeight(height);
    } else {
      var dims = getImageSizeSync(imageData);
      st.setHeight(width * dims.height / dims.width);
    }
    var i = new simpleOdf.Image(imageData);
    i.setStyle(st);
    p.append(i);
  }

  /**
  Set up the ParagraphStyle objects to be used as defaults for parts of our documents:
  * standardStyle: Style to be used for standard text
  * tableStyle: Style for the attributes table
  * codeStyle: Style for the code output
  */
  _setupStyles() {
    // declare fonts to be used
    this.doc.declareFont('Ubuntu Mono','monospace',FontPitch.Variable);
    this.doc.declareFont('Arial','Arial',FontPitch.Variable);
    // add standard style
    var style = new ParagraphStyle();
    style.setFontSize( 10 );
    style.setFontName('Arial');
    this.standardStyle = style;
    // add table attributes style
    var style = new ParagraphStyle();
    style.setFontSize( 8 );
    style.setFontName('Arial');
    this.tableStyle = style;
    // add table header style
    var style = new ParagraphStyle();
    style.setFontSize( 12 );
    style.setFontName('Arial');
    style.setTypeface(Typeface.Bold);
    this.tableHeaderStyle = style;
    // Add code style
    style = new ParagraphStyle();
    style.setFontSize( 6 );
    style.setFontName('Ubuntu Mono');
    this.codeStyle = style;
    // Generate the cell styles used for Tables
    // cst01, cst02 and cst03 are used for single rows and header rows
    // for multiple rows that should be surrounded by a thicker line:
    // cst11, cst12 and cst13 are used for the top row
    // cst21, cst22 and cst23 are used for the intermediate rows (only vertical lines)
    // cst31, cst32 and cst33 are used for the end row
    //
    var none = 'none';
    var thick = '1pt solid #000000';
    var thin = '0.5pt solid #000000';
    this.cst01 = new TableCellStyle()
    this.cst01.addBorder(DirectionType.top, thick);
    this.cst01.addBorder(DirectionType.left, thick);
    this.cst01.addBorder(DirectionType.bottom, thick);
    this.cst01.addBorder(DirectionType.right, thin);
    this.cst02 = new TableCellStyle()
    this.cst02.addBorder(DirectionType.top, thick);
    this.cst02.addBorder(DirectionType.left, none);
    this.cst02.addBorder(DirectionType.bottom, thick);
    this.cst02.addBorder(DirectionType.right, thin);
    this.cst03 = new TableCellStyle()
    this.cst03.addBorder(DirectionType.top, thick);
    this.cst03.addBorder(DirectionType.left, none);
    this.cst03.addBorder(DirectionType.bottom, thick);
    this.cst03.addBorder(DirectionType.right, thick);
    this.cst11 = new TableCellStyle()
    this.cst11.addBorder(DirectionType.top, thick);
    this.cst11.addBorder(DirectionType.left, thick);
    this.cst11.addBorder(DirectionType.bottom, none);
    this.cst11.addBorder(DirectionType.right, thin);
    this.cst12 = new TableCellStyle()
    this.cst12.addBorder(DirectionType.top, thick);
    this.cst12.addBorder(DirectionType.left, none);
    this.cst12.addBorder(DirectionType.bottom, none);
    this.cst12.addBorder(DirectionType.right, thin);
    this.cst13 = new TableCellStyle()
    this.cst13.addBorder(DirectionType.top, thick);
    this.cst13.addBorder(DirectionType.left, none);
    this.cst13.addBorder(DirectionType.bottom, none);
    this.cst13.addBorder(DirectionType.right, thick);
    this.cst21 = new TableCellStyle()
    this.cst21.addBorder(DirectionType.top, none);
    this.cst21.addBorder(DirectionType.left, thick);
    this.cst21.addBorder(DirectionType.bottom, none);
    this.cst21.addBorder(DirectionType.right, thin);
    this.cst22 = new TableCellStyle()
    this.cst22.addBorder(DirectionType.top, none);
    this.cst22.addBorder(DirectionType.left, none);
    this.cst22.addBorder(DirectionType.bottom, none);
    this.cst22.addBorder(DirectionType.right, thin);
    this.cst23 = new TableCellStyle()
    this.cst23.addBorder(DirectionType.top, none);
    this.cst23.addBorder(DirectionType.left, none);
    this.cst23.addBorder(DirectionType.bottom, none);
    this.cst23.addBorder(DirectionType.right, thick);
    this.cst31 = new TableCellStyle()
    this.cst31.addBorder(DirectionType.top, none);
    this.cst31.addBorder(DirectionType.left, thick);
    this.cst31.addBorder(DirectionType.bottom, thick);
    this.cst31.addBorder(DirectionType.right, thin);
    this.cst32 = new TableCellStyle()
    this.cst32.addBorder(DirectionType.top, none);
    this.cst32.addBorder(DirectionType.left, none);
    this.cst32.addBorder(DirectionType.bottom, thick);
    this.cst32.addBorder(DirectionType.right, thin);
    this.cst33 = new TableCellStyle()
    this.cst33.addBorder(DirectionType.top, none);
    this.cst33.addBorder(DirectionType.left, none);
    this.cst33.addBorder(DirectionType.bottom, thick);
    this.cst33.addBorder(DirectionType.right, thick);
  }
}
