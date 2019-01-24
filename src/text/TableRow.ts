import { OdfElement } from "../OdfElement";
import { TableElementName } from './TableElementName';
import { TableCell } from './TableCell';
import { ValueType } from '../style/ValueType';
import { Paragraph } from './Paragraph';
/**
 * This class represents a table row.
 * A table contains column definitions, and multiple rows each containing table cells.
 * The objects Table, TableColDef and TableCell all have styles, TableRow only exists as
 * a container for the table cells.
 *
 * @since 0.7.0
 */
export class TableRow extends OdfElement {
  /**
   * Creates a tableRow
   *
   * @since 0.7.0
   */
  public constructor() {
    super();
  }

  /**
   * Adds a new cell
   *
   * @param {string | Paragraph} [text] The text content of the table cell
   * @param {ValueType} [type] The type of the value for the cell
   * @returns {TableCell} The newly added table cell
   * @since 0.7.0
   */
  public addCell(content: string|Paragraph, type?:ValueType): TableCell {
    const cell = new TableCell(content,type);
    this.append(cell);
    return cell;
  }

  /**
   * Returns the cell at the specified position in this table row.
   * If an invalid position is given, undefined is returned.
   *
   * @param {number} position The index of the requested the list item (starting from 0).
   * @returns {TableCell | undefined} The table cell at the specified position
   * or undefined if there is no cell at the specified position
   * @since 0.7.0
   */
  public getCell(position: number): TableCell | undefined {
    return this.get(position) as TableCell;
  }

  /**
   * Returns all cells as an array.
   *
   * @returns {ListItem[]} A copy of the list of cells
   * @since 0.7.0
   */
  public getCells(): TableCell[] {
    return this.getAll() as TableCell[];
  }

  /**
   * Removes the cell from the specified position.
   *
   * @param {number} position The index of the cell to remove (starting from 0).
   * @returns {TableCell | undefined} The removed table cell
   * or undefined if there is no cell at the specified position
   * @since 0.7.0
   */
  public removeCellAt(position: number): TableCell | undefined {
    return this.removeAt(position) as TableCell;
  }

  /**
   * Removes all cells from this row.
   *
   * @since 0.7.0
   */
  public clear(): void {
    let removedElement;
    do {
      removedElement = this.removeAt(0);
    } while (removedElement !== undefined);
  }

  /**
   * Returns the number of cells in this row.
   *
   * @returns {number} The number of cells in this row
   * @since 0.7.0
   */
  public size(): number {
    return this.getAll().length;
  }

  /** @inheritDoc */
  protected toXml(document: Document, parent: Element): void {
    if (this.hasChildren() === false) {
      return;
    }
    const cellElement = document.createElement(TableElementName.TableRow);
    parent.appendChild(cellElement);
    super.toXml(document, cellElement);
  }
}
