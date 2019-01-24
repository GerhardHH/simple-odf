import { OdfElement } from "../OdfElement";
import { TableElementName } from "./TableElementName";
import { TableColDef } from './TableColDef';
import { TableRow } from './TableRow';
/**
 * This class represents a table.
 * A table contains column definitions, and multiple rows each containing table cells.
 * The objects Table, TableColDef and TableCell all have styles, TableRow only exists as
 * a container for the table cells.
 *
 * @since 0.7.0
 */
export class Table extends OdfElement {
  private colDefs: TableColDef[];
  /**
   * Creates a table with a given number of columns
   *
   * @param {number} numCols The number of columns
   * @since 0.7.0
   */
  public constructor(numCols:number) {
    super();
    this.colDefs = [];
    for (var i =0; i < numCols; i++) {
      this.colDefs.push(new TableColDef());
    }
  }

  /**
   * Adds a new row
   *
   * @returns {TableRow} The newly added row
   * @since 0.7.0
   */
  public addRow(): TableRow {
    var row = new TableRow();
    this.append(row);
    return row;
  }

  /**
   * Returns the row at the specified position in this table.
   * If an invalid position is given, undefined is returned.
   *
   * @param {number} position The index of the requested the list item (starting from 0).
   * @returns {TableRow | undefined} The list item at the specified position
   * or undefined if there is no list item at the specified position
   * @since 0.7.0
   */
  public getRow(position: number): TableRow | undefined {
    return this.get(position) as TableRow;
  }

  /**
   * Returns all rows.
   *
   * @returns {TableRow[]} A copy of the list of rows
   * @since 0.7.0
   */
  public getRows(): TableRow[] {
    return this.getAll() as TableRow[];
  }

  /**
   * Removes the row from the specified position.
   *
   * @param {number} position The index of the row to remove (starting from 0).
   * @returns {TableRow | undefined} The removed list item
   * or undefined if there is no row at the specified position
   * @since 0.7.0
   */
  public removeRowAt(position: number): TableRow | undefined {
    return this.removeAt(position) as TableRow;
  }

  /**
   * Removes all rows from this table.
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
   * Returns the number of rows in this table.
   *
   * @returns {number} The number of rows in the table
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
    const tableElement = document.createElement(TableElementName.Table);
    // Add column definitions
    for (let colDef of this.colDefs) {
      colDef.toXml(document, tableElement);
    }
    parent.appendChild(tableElement);
    super.toXml(document, tableElement);
  }
}
