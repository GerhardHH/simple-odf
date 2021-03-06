import { OdfAttributeName } from "../OdfAttributeName";
import { OdfElementName } from "../OdfElementName";
import { TabStopType } from "./TabStopType";

/**
 * This class represents a tab stop.
 *
 * Tab stops are used to align text in a paragraph.
 * To become effective they must be set to the style of the respective paragraph.
 *
 * @example
 * // creates a right aligned tab stop with a distance of 4 cm from the left margin
 * const tabStop4 = new TabStop(4, TabStopType.Right);
 * paragraph.getStyle().addTabStop(tabStop4);
 *
 * @since 0.3.0
 */
export class TabStop {
  /**
   * Creates a tab stop to be set to the style of a paragraph.
   *
   * @param {number} [position] The position of the tab stop in centimeters relative to the left margin.
   * If a negative value is given, the `position` will be set to `0`.
   * @param {TabStopType} [type] The type of the tab stop. Defaults to `TabStopType.Left`.
   * @since 0.3.0
   */
  public constructor(private position: number, private type = TabStopType.Left) {
    this.setPosition(position);
  }

  /**
   * Sets the position of this tab stop.
   *
   * @param {number} position The position of the tab stop in centimeters relative to the left margin.
   * If a negative value is given, the `position` will be set to `0`.
   * @since 0.3.0
   */
  public setPosition(position: number): void {
    this.position = Math.max(position, 0);
  }

  /**
   * Returns the position of this tab stop.
   *
   * @returns {number} The position of this tab stop in centimeters
   * @since 0.3.0
   */
  public getPosition(): number {
    return this.position;
  }

  /**
   * Sets the type of this tab stop.
   *
   * @param {TabStopType} type The type of the tab stop
   * @since 0.3.0
   */
  public setType(type: TabStopType): void {
    this.type = type;
  }

  /**
   * Returns the type of this tab stop.
   *
   * @returns {TabStopType} The type of this tab stop
   * @since 0.3.0
   */
  public getType(): TabStopType {
    return this.type;
  }

  /**
   * Transforms the tab stop into Open Document Format.
   *
   * @param {Document} document The XML document
   * @param {Element} parent The parent node in the DOM (`style:tab-stops`)
   * @since 0.3.0
   */
  public toXml(document: Document, parent: Element): void {
    const tabStopElement = document.createElement(OdfElementName.StyleTabStop);
    parent.appendChild(tabStopElement);

    tabStopElement.setAttribute(OdfAttributeName.StylePosition, `${this.position}cm`);
    if (this.type !== TabStopType.Left) {
      tabStopElement.setAttribute(OdfAttributeName.StyleType, this.type);
    }
  }
}
