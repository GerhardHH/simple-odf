import { createHash } from "crypto";
import { StyleHelper } from "./StyleHelper";
import { OdfAttributeName } from "../OdfAttributeName";
import { OdfElementName } from "../OdfElementName";
import { ITableStyle } from './ITableStyle';
import { TableAlignment } from './TableAlignment';
/**
 * This class represents the style of a table column
 *
 * @since 0.7.0
 */
export class TableStyle implements ITableStyle {
  private widthAbs: string;
  private widthRel: number;
  private alignment: TableAlignment;

  /**
  * constructor - standard is use optimal width
  */
  constructor() {
    this.widthAbs = "100%";
    this.widthRel = 0;
    this.alignment = TableAlignment.margins;
  }
  /** @inheritDoc */
  setWidthString(width: string): void {
    this.widthAbs = width;
  }
  /** @inheritDoc */
  setRelativetWidth(width: number): void {
    this.widthRel = width;
  }
  /** @inheritDoc */
  setAlignment(align: TableAlignment): void {
    this.alignment = align;
  }

  /** @inheritDoc */
  public toXml(document: Document, parent: Element): void {
    const styleName = this.getName();
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
    hash.update(this.widthAbs || '');
    hash.update(this.widthRel.toString());
    hash.update(this.alignment);
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
    styleElement.setAttribute(OdfAttributeName.StyleFamily, "table");
    styleElement.setAttribute(OdfAttributeName.StyleName, styleName);
    const subElement = document.createElement(OdfElementName.StyleTableProperties);
    styleElement.appendChild(subElement);
    if (this.widthAbs != "") {
      subElement.setAttribute(OdfAttributeName.StyleWidth, this.widthAbs);
    }
    if (this.widthRel) {
      subElement.setAttribute(OdfAttributeName.StyleRelColWidth, this.widthRel.toString());
    }
    if (this.alignment) {
      subElement.setAttribute(OdfAttributeName.TableAlign, this.alignment);
    }
    return styleElement;
  }
}
