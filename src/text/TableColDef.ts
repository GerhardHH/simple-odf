import { OdfElement } from "../OdfElement";
import { TableColStyle } from '../style/TableColStyle';
import { TableElementName } from './TableElementName';
/**
 * This class represents a table column definition.
 * On construction, it automatically creates a column style
 *
 * @since 0.7.0
 */
export class TableColDef extends OdfElement {
  private style: TableColStyle;
  /**
   * Creates a table column definition
   *
   * @since 0.7.0
   */
  public constructor() {
    super();
    this.style = new TableColStyle();
  }
  /**
  * Return the TableColStyle associated with this
  */
  public getStyle(): TableColStyle {
    return this.style;
  }
  /** @inheritDoc */
  public toXml(document: Document, parent: Element): void {
    const element = document.createElement(TableElementName.TableColumn);
    parent.appendChild(element);
    this.style.toXml(document, element);
    super.toXml(document, element);
  }
}
