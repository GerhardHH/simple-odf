import { createHash } from "crypto";
import { StyleHelper } from "./StyleHelper";
import { OdfAttributeName } from "../OdfAttributeName";
import { OdfElementName } from "../OdfElementName";
import { VerticalAlignment } from './VerticalAlignment';
import { DirectionType } from './DirectionType';
import { ITableCellStyle } from './ITableCellStyle';
/**
 * This class represents the style of a table cell
 *
 * @since 0.7.0
 */
export class TableCellStyle implements ITableCellStyle {
  private vAlign: VerticalAlignment;
  private border: any;
  private padding: any;
  // can be set to achieve a default behaviour
  static defaultBorder: any;
  static defaultPadding: any;
  /**
  constructor - standard values are used for border and padding.
  Default is vertical alignment at the top.
  */
  constructor() {
    this.vAlign = VerticalAlignment.top;
    this.border = {
      ...TableCellStyle.defaultBorder
    };
    this.padding = {
      ...TableCellStyle.defaultPadding
    };
  }
  /** @inheritDoc */
  setVerticalAlignment(align:VerticalAlignment): void {
    this.vAlign = align;
  }
  /** @inheritDoc */
  addBorder(where:DirectionType,border:string): void {
    this.border[where] = border;
  }
  /** @inheritDoc */
  resetBorder(): void {
    this.border = {};
  }
  /** @inheritDoc */
  addPadding(where:DirectionType,padding:string): void {
    this.padding[where] = padding;
  }
  /** @inheritDoc */
  resetPadding(): void {
    this.padding = {};
  }
  getPadding() {
    return this.padding;
  }

  /** @inheritDoc */
  public toXml(document: Document, parent: Element): void {
    const styleName = this.getName();
    // console.log('Style name is ' + styleName + ' for');
    // console.log(this.padding);
    parent.setAttribute(OdfAttributeName.TableStyleName, styleName);
    if (this.existsStyle(document, styleName) === true) {
      return;
    }
    this.createStyleElement(document, styleName);
  }

  /**
   * Returns the name of the style.
   * The name is computed to make sure equal styles feature equal names and reflects the current configuration.
   *
   * @returns {string} The name of the style
   * @since 0.7.0
   * @private
   */
  private getName(): string {
    const hash = createHash("md5");
    // update hash with _self's properties
    hash.update(this.vAlign);
    for (var key in this.border) {
      hash.update(this.border[key]);
    }
    for (var key in this.padding) {
      hash.update(this.padding[key]);
    }
    return hash.digest("hex");
  }

  /**
   * Checks if a style with the given name already exists.
   *
   * @param {Document} document The document to search in
   * @param {string} styleName The name of the style to look for
   * @returns {boolean} Returns whether the style with the given name already exists
   * @private
   */
  private existsStyle(document: Document, styleName: string): boolean {
    const automaticStylesElement = StyleHelper.getAutomaticStylesElement(document);

    if (automaticStylesElement.childNodes.length > 0) {
      /* tslint:disable-next-line:prefer-for-of*/
      for (let i = 0; i < automaticStylesElement.childNodes.length; i++) {
        const existingStyleElement = automaticStylesElement.childNodes[i] as Element;
        const nameAttribute = existingStyleElement.attributes.getNamedItem(OdfAttributeName.StyleName);
        if (nameAttribute !== null && nameAttribute.value === styleName) {
          return true;
        }
      }
    }
    return false;
  }

  /**
   * Creates a style element with the given name.
   *
   * @param {Document} document The document to create the element in
   * @param {string} styleName The name of the style to create
   * @returns {Element} The newly created style element
   * @private
   */
  private createStyleElement(document: Document, styleName: string): Element {
    const automaticStylesElement = StyleHelper.getAutomaticStylesElement(document);
    const styleElement = document.createElement(OdfElementName.StyleStyle);
    automaticStylesElement.appendChild(styleElement);
    styleElement.setAttribute(OdfAttributeName.StyleFamily, "table-cell");
    styleElement.setAttribute(OdfAttributeName.StyleName, styleName);
    const subElement = document.createElement(OdfElementName.StyleTableCellProperties);
    styleElement.appendChild(subElement);
    subElement.setAttribute(OdfAttributeName.StyleVerticalAlign, this.vAlign);
    for (var key in this.border) {
      if (key === DirectionType.all) {
        subElement.setAttribute("fo:border", this.border[key] );
      } else {
        subElement.setAttribute("fo:border-"+key, this.border[key] );
      }
    }
    for (var key in this.padding) {
      if (key === DirectionType.all) {
        subElement.setAttribute("fo:padding", this.padding[key] );
      } else {
        subElement.setAttribute("fo:padding-"+key, this.padding[key] );
      }
    }
    return styleElement;
  }
}
