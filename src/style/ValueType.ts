/**
* type used to set value type of table cells
<define name="valueType">
  <choice>
    <value>float</value>
    <value>time</value>
    <value>date</value>
    <value>percentage</value>
    <value>currency</value>
    <value>boolean</value>
    <value>string</value>
  </choice>
</define>
*/
export enum ValueType {
  float = "float",
  time = "time",
  date = "date",
  percentage = "percentage",
  currency = "currency",
  boolean = "boolean",
  string = "string",
}
