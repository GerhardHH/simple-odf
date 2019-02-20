import { OdfElement } from "../OdfElement";
import { OdfAttributeName } from '../OdfAttributeName';
import { Paragraph } from "./Paragraph";
import { TableElementName } from "./TableElementName";
import { TableCellStyle } from '../style/TableCellStyle';
import { ValueType } from '../style/ValueType';
/**
 * This class represents a table cell
 *
 * @since 0.2.0
 */
export class TableCell extends OdfElement {
  private type: ValueType;
  private style: TableCellStyle;

  /**
   * Creates a table cell
   *
   * @param {string | Paragraph} [content] The text content of the table cell, or a predifined paragraph
   * @param {ValueType} [type] The type of the value for the cell
   * @since 0.2.0
   */
  public constructor(content?: string | Paragraph, type?:ValueType) {
    super();
    this.type = type? type : ValueType.string;
    var paragraph;
    if (content instanceof Paragraph) {
      paragraph = content;
    } else if (content) {
      paragraph = new Paragraph(content);
    }
    // only add the first paragraph is provided
    if (paragraph) {
      this.append(paragraph);
    }
    this.style = new TableCellStyle();
    // console.log('Add cell (' + content + ') pad=' + this.style.getPadding().left);
  }
  /**
  * Return the TableCellStyle associated with this
  */
  public getStyle(): TableCellStyle {
    return this.style;
  }
  /**
  * Set the cell style
  */
  public setStyle(st:TableCellStyle) {
    this.style = st;
  }

  /** @inheritDoc */
  protected toXml(document: Document, parent: Element): void {
    const element = document.createElement(TableElementName.TableCell);
    element.setAttribute(OdfAttributeName.OfficeValueType, this.type.toString());
    // add the style name
    this.style.toXml(document,element);
    parent.appendChild(element);
    super.toXml(document, element);
  }
}
