import { TableAlignment } from './TableAlignment';
/**
 * This class represents the style of a table.
 * Currently, the only implemented attributes are an excerpt
 * from the definition:
 <define name="style-table-properties-attlist">
   <interleave>
     <optional>
       <attribute name="style:width">
         <ref name="positiveLength"/>
       </attribute>
     </optional>
     <optional>
       <attribute name="style:rel-width">
         <ref name="percent"/>
       </attribute>
     </optional>
     <optional>
       <attribute name="table:align">
         <choice>
           <value>left</value>
           <value>center</value>
           <value>right</value>
           <value>margins</value>
         </choice>
       </attribute>
     </optional>
     <ref name="common-horizontal-margin-attlist"/>
     <ref name="common-vertical-margin-attlist"/>
     <ref name="common-margin-attlist"/>
     <ref name="common-page-number-attlist"/>
     <ref name="common-break-attlist"/>
     <ref name="common-background-color-attlist"/>
     <ref name="common-shadow-attlist"/>
     <ref name="common-keep-with-next-attlist"/>
     <optional>
       <attribute name="style:may-break-between-rows">
         <ref name="boolean"/>
       </attribute>
     </optional>
     <optional>
       <attribute name="table:border-model">
         <choice>
           <value>collapsing</value>
           <value>separating</value>
         </choice>
       </attribute>
     </optional>
     <ref name="common-writing-mode-attlist"/>
     <optional>
       <attribute name="table:display">
         <ref name="boolean"/>
       </attribute>
     </optional>
   </interleave>
 </define>
 *
 * Currently implemented:
 * style:width, style:rel-width, table:align
 * @since 0.4.0
 */
export interface ITableStyle {
  /**
   * Sets table width in cm etc, use value string
   *
   * @since 0.7.0
   */
  setWidthString(width:string): void;

  /**
   * Sets relative width as a number
   *
   * @since 0.7.0
   */
  setRelativetWidth(width:number): void;

  /**
   * Sets alignment
   *
   * @since 0.7.0
   */
  setAlignment(align:TableAlignment): void;

  /**
   * Transforms the column style into Open Document Format.
   *
   * @param {Document} document The XML document
   * @param {Element} parent The parent node in the DOM (`text:h` or `text:p`)
   * @since 0.4.0
   */
  toXml(document: Document, parent: Element): void;
}
