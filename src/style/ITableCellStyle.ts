import { VerticalAlignment } from './VerticalAlignment';
import { DirectionType } from './DirectionType';
/**
 * This class represents the style of a table cell.
 * Currently, the only implemented attributes are an excerpt
 * from the definition:
 <define name="style-table-cell-properties-attlist">
   <interleave>
     <optional>
       <attribute name="style:vertical-align">
         <choice>
           <value>top</value>
           <value>middle</value>
           <value>bottom</value>
           <value>automatic</value>
         </choice>
       </attribute>
     </optional>
     <optional>
       <attribute name="style:text-align-source">
         <choice>
           <value>fix</value>
           <value>value-type</value>
         </choice>
       </attribute>
     </optional>
     <ref name="common-style-direction-attlist"/>
     <optional>
       <attribute name="style:glyph-orientation-vertical">
         <choice>
           <value>auto</value>
           <value>0</value>
           <value>0deg</value>
           <value>0rad</value>
           <value>0grad</value>
         </choice>
       </attribute>
     </optional>
     <ref name="common-writing-mode-attlist"/>
     <ref name="common-shadow-attlist"/>
     <ref name="common-background-color-attlist"/>
     <ref name="common-border-attlist"/>
     <optional>
       <attribute name="style:diagonal-tl-br">
         <ref name="string"/>
       </attribute>
     </optional>
     <optional>
       <attribute name="style:diagonal-tl-br-widths">
         <ref name="borderWidths"/>
       </attribute>
     </optional>
     <optional>
       <attribute name="style:diagonal-bl-tr">
         <ref name="string"/>
       </attribute>
     </optional>
     <optional>
       <attribute name="style:diagonal-bl-tr-widths">
         <ref name="borderWidths"/>
       </attribute>
     </optional>
     <ref name="common-border-line-width-attlist"/>
     <ref name="common-padding-attlist"/>
     <optional>
       <attribute name="fo:wrap-option">
         <choice>
           <value>no-wrap</value>
           <value>wrap</value>
         </choice>
       </attribute>
     </optional>
     <ref name="common-rotation-angle-attlist"/>
     <optional>
       <attribute name="style:rotation-align">
         <choice>
           <value>none</value>
           <value>bottom</value>
           <value>top</value>
           <value>center</value>
         </choice>
       </attribute>
     </optional>
     <optional>
       <attribute name="style:cell-protect">
         <choice>
           <value>none</value>
           <value>hidden-and-protected</value>
           <list>
             <oneOrMore>
               <choice>
                 <value>protected</value>
                 <value>formula-hidden</value>
               </choice>
             </oneOrMore>
           </list>
         </choice>
       </attribute>
     </optional>
     <optional>
       <attribute name="style:print-content">
         <ref name="boolean"/>
       </attribute>
     </optional>
     <optional>
       <attribute name="style:decimal-places">
         <ref name="nonNegativeInteger"/>
       </attribute>
     </optional>
     <optional>
       <attribute name="style:repeat-content">
         <ref name="boolean"/>
       </attribute>
     </optional>
     <optional>
       <attribute name="style:shrink-to-fit">
         <ref name="boolean"/>
       </attribute>
     </optional>
   </interleave>
 </define>
 *
 * Currently implemented:
 * style:vertical-align, common-border-attlist and common-padding-attlist which means:
 * fo:border, fo:border-top, fo:border-bottom, fo:border-right, fo:border-left
 * fo:padding... etc
 * For setting them, we use the help of the DirectionType enumerator.
 * @since 0.4.0
 */
export interface ITableCellStyle {
  /**
   * Sets vertical alignment
   *
   * @since 0.7.0
   */
  setVerticalAlignment(align:VerticalAlignment): void;
  /**
   * Add border properties for the given direction.
   *
   * @since 0.7.0
   */
  addBorder(where:DirectionType,border:string): void;
  /**
   * Reset the border info to standard
   *
   * @since 0.7.0
   */
  resetBorder(): void;
  /**
   * Add padding properties for the given direction.
   *
   * @since 0.7.0
   */
  addPadding(where:DirectionType,padding:string): void;
  /**
   * Reset the padding to standard
   *
   * @since 0.7.0
   */
  resetPadding(): void;

  /**
   * Transforms the column style into Open Document Format.
   *
   * @param {Document} document The XML document
   * @param {Element} parent The parent node in the DOM (`text:h` or `text:p`)
   * @since 0.4.0
   */
  toXml(document: Document, parent: Element): void;
}
