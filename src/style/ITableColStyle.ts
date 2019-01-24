/**
 * This class represents the style of a table column
 <define name="style-table-column-properties-attlist">
   <interleave>
     <optional>
       <attribute name="style:column-width">
         <ref name="positiveLength"/>
       </attribute>
     </optional>
     <optional>
       <attribute name="style:rel-column-width">
         <ref name="relativeLength"/>
       </attribute>
     </optional>
     <optional>
       <attribute name="style:use-optimal-column-width">
         <ref name="boolean"/>
       </attribute>
     </optional>
     <ref name="common-break-attlist"/>
   </interleave>
 </define>
 *
 * @since 0.4.0
 */
export interface ITableColStyle {
  /**
   * Sets Column width in cm etc, use value string
   *
   * @since 0.7.0
   */
  setWidthString(width:string): void;

  /**
   * Sets relative Column width as a number
   *
   * @since 0.7.0
   */
  seRelativetWidth(width:number): void;

  /**
   * Sets flag to use optimal column width (the default)
   *
   * @since 0.7.0
   */
  setUseOptimalWidth(use:boolean): void;

  /**
   * Transforms the column style into Open Document Format.
   *
   * @param {Document} document The XML document
   * @param {Element} parent The parent node in the DOM (`text:h` or `text:p`)
   * @since 0.4.0
   */
  toXml(document: Document, parent: Element): void;
}
