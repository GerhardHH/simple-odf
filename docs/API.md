## Classes

<dl>
<dt><a href="#Image">Image</a></dt>
<dd><p>This class represents an image in a paragraph.</p>
</dd>
<dt><a href="#Meta">Meta</a></dt>
<dd><p>This class represents the metadata of a document.</p>
<p>It is used to set descriptive information about the document.</p>
</dd>
<dt><a href="#Color">Color</a></dt>
<dd><p>This class represents a Color.</p>
</dd>
<dt><a href="#ImageStyle">ImageStyle</a></dt>
<dd><p>This class represents the style of an image</p>
</dd>
<dt><a href="#ParagraphStyle">ParagraphStyle</a></dt>
<dd><p>This class represents the style of a paragraph</p>
</dd>
<dt><a href="#StyleHelper">StyleHelper</a></dt>
<dd><p>Utility class for dealing with styles.</p>
</dd>
<dt><a href="#TabStop">TabStop</a></dt>
<dd><p>This class represents a tab stop.</p>
<p>Tab stops are used to align text in a paragraph.
To become effective they must be set to the style of the respective paragraph.</p>
</dd>
<dt><a href="#Heading">Heading</a></dt>
<dd><p>This class represents a heading.</p>
</dd>
<dt><a href="#Hyperlink">Hyperlink</a></dt>
<dd><p>This class represents a hyperlink in a paragraph.</p>
</dd>
<dt><a href="#List">List</a></dt>
<dd><p>This class represents a list.
It can contain multiple list items.</p>
</dd>
<dt><a href="#ListItem">ListItem</a></dt>
<dd><p>This class represents an item in a list.</p>
</dd>
<dt><a href="#Paragraph">Paragraph</a></dt>
<dd><p>This class represents a paragraph.</p>
</dd>
<dt><a href="#TextDocument">TextDocument</a></dt>
<dd><p>This class represents an empty ODF text document.</p>
</dd>
</dl>

<a name="Image"></a>

## Image
This class represents an image in a paragraph.

**Since**: 0.3.0  

* [Image](#Image)
    * [`new Image(path)`](#new_Image_new)
    * [`.setStyle(style)`](#Image+setStyle)
    * [`.getStyle()`](#Image+getStyle) ⇒ <code>IImageStyle</code>
    * [`.toXml()`](#Image+toXml)


* * *

<a name="new_Image_new"></a>

### `new Image(path)`
Creates an image

#### Parameters
- path <code>string</code>  
Path to the image file that should be embedded


* * *

<a name="Image+setStyle"></a>

### `image.setStyle(style)`
Sets the new style of this image.

#### Parameters
- style <code>IImageStyle</code>  
The new style

**Since**: 0.5.0  

* * *

<a name="Image+getStyle"></a>

### `image.getStyle()` ⇒ <code>IImageStyle</code>
Returns the style of this image.

**Return value**  
<code>IImageStyle</code> - The style of the image

**Since**: 0.5.0  

* * *

<a name="Image+toXml"></a>

### `image.toXml()`

* * *

<a name="Meta"></a>

## Meta
This class represents the metadata of a document.

It is used to set descriptive information about the document.

**Since**: 0.6.0  

* [Meta](#Meta)
    * [`new Meta()`](#new_Meta_new)
    * [`.setCreator(creator)`](#Meta+setCreator) ⇒ [<code>Meta</code>](#Meta)
    * [`.getCreator()`](#Meta+getCreator) ⇒ <code>string</code> \| <code>undefined</code>
    * [`.getCreationDate()`](#Meta+getCreationDate) ⇒ <code>number</code>
    * [`.setDate(date)`](#Meta+setDate) ⇒ [<code>Meta</code>](#Meta)
    * [`.getDate()`](#Meta+getDate) ⇒ <code>number</code> \| <code>undefined</code>
    * [`.setDescription(description)`](#Meta+setDescription) ⇒ [<code>Meta</code>](#Meta)
    * [`.getDescription()`](#Meta+getDescription) ⇒ <code>string</code> \| <code>undefined</code>
    * [`.getEditingCycles()`](#Meta+getEditingCycles) ⇒ <code>number</code>
    * [`.getGenerator()`](#Meta+getGenerator) ⇒ <code>string</code>
    * [`.setInitialCreator(initialCreator)`](#Meta+setInitialCreator) ⇒ [<code>Meta</code>](#Meta)
    * [`.getInitialCreator()`](#Meta+getInitialCreator) ⇒ <code>string</code> \| <code>undefined</code>
    * [`.addKeyword(keyword)`](#Meta+addKeyword) ⇒ [<code>Meta</code>](#Meta)
    * [`.getKeywords()`](#Meta+getKeywords) ⇒ <code>Array.&lt;string&gt;</code>
    * [`.removeKeyword(keyword)`](#Meta+removeKeyword) ⇒ [<code>Meta</code>](#Meta)
    * [`.clearKeywords()`](#Meta+clearKeywords) ⇒ [<code>Meta</code>](#Meta)
    * [`.setLanguage(language)`](#Meta+setLanguage) ⇒ [<code>Meta</code>](#Meta)
    * [`.getLanguage()`](#Meta+getLanguage) ⇒ <code>string</code> \| <code>undefined</code>
    * [`.setPrintDate(printDate)`](#Meta+setPrintDate) ⇒ [<code>Meta</code>](#Meta)
    * [`.getPrintDate()`](#Meta+getPrintDate) ⇒ <code>number</code> \| <code>undefined</code>
    * [`.setPrintedBy(printedBy)`](#Meta+setPrintedBy) ⇒ [<code>Meta</code>](#Meta)
    * [`.getPrintedBy()`](#Meta+getPrintedBy) ⇒ <code>string</code> \| <code>undefined</code>
    * [`.setSubject(subject)`](#Meta+setSubject) ⇒ [<code>Meta</code>](#Meta)
    * [`.getSubject()`](#Meta+getSubject) ⇒ <code>string</code> \| <code>undefined</code>
    * [`.setTitle(title)`](#Meta+setTitle) ⇒ [<code>Meta</code>](#Meta)
    * [`.getTitle()`](#Meta+getTitle) ⇒ <code>string</code> \| <code>undefined</code>
    * [`.toXml(document, root)`](#Meta+toXml)


* * *

<a name="new_Meta_new"></a>

### `new Meta()`
Creates a `Meta` instance that represents the metadata of a document.

Initializes the creation date with the current time stamp
and sets the username of the currently effective user as initial creator.

**Example**  
```js
document.getMeta()
  .setCreator("Homer Simpson")
  .setTitle("Node.js meets ODF")
  .setSubject("ODF document creation")
  .addKeyword("Node.js")
  .addKeyword("Open Document Format")
  .setDescription("ODF text document created with Node.js powered by simple-odf")
  .setLanguage("en-US");
```

* * *

<a name="Meta+setCreator"></a>

### `meta.setCreator(creator)` ⇒ [<code>Meta</code>](#Meta)
The `setCreator()` method sets the name of the person who last modified the document.

#### Parameters
- creator <code>string</code> | <code>undefined</code>  
The name of the person who last modified a document
                                    or `undefined` to unset the creator

**Return value**  
[<code>Meta</code>](#Meta) - The `Meta` object

**Example**  
```js
const meta = new Meta();
meta.setCreator('Lisa Simpson'); // 'Lisa Simpson'
meta.setCreator(undefined);      // undefined
```
**Since**: 0.6.0  

* * *

<a name="Meta+getCreator"></a>

### `meta.getCreator()` ⇒ <code>string</code> \| <code>undefined</code>
The `getCreator()` method returns the name of the person who last modified the document.

**Return value**  
<code>string</code> \| <code>undefined</code> - The name of the person who last modified the document
                              or `undefined` if the creator is not set

**Example**  
```js
const meta = new Meta();
meta.getCreator();               // undefined
meta.setCreator('Lisa Simpson');
meta.getCreator();               // 'Lisa Simpson'
```
**Since**: 0.6.0  

* * *

<a name="Meta+getCreationDate"></a>

### `meta.getCreationDate()` ⇒ <code>number</code>
The `getCreationDate()` method returns the UTC timestamp specifying the date and time when a document was created.

The creation date is initialized with the UTC timestamp of the moment the `Meta` instance was created.

**Return value**  
<code>number</code> - The UTC timestamp specifying the date and time when a document was created

**Example**  
```js
const meta = new Meta(); // 2020-04-01 12:00:00
meta.getCreationDate();  // 1585742400000
```
**Since**: 0.6.0  

* * *

<a name="Meta+setDate"></a>

### `meta.setDate(date)` ⇒ [<code>Meta</code>](#Meta)
The `setDate()` method sets the date and time when the document was last modified.

#### Parameters
- date <code>number</code> | <code>undefined</code>  
The UTC timestamp specifying the date and time when the document was last modified
                                 or `undefined` to unset the date

**Return value**  
[<code>Meta</code>](#Meta) - The `Meta` object

**Example**  
```js
const meta = new Meta();
meta.setDate(Date.now()); // 2020-07-23 13:37:00
```
**Since**: 0.6.0  

* * *

<a name="Meta+getDate"></a>

### `meta.getDate()` ⇒ <code>number</code> \| <code>undefined</code>
The `getDate()` method returns the date and time when the document was last modified.

**Return value**  
<code>number</code> \| <code>undefined</code> - The UTC timestamp specifying the date and time when the document was last modified
                              or `undefined` if the date is not set

**Example**  
```js
const meta = new Meta();
meta.getDate();           // undefined
meta.setDate(Date.now()); // 2020-07-23 13:37:00
meta.getDate();           // 1595511420000
```
**Since**: 0.6.0  

* * *

<a name="Meta+setDescription"></a>

### `meta.setDescription(description)` ⇒ [<code>Meta</code>](#Meta)
The `setDescription()` method sets the description of the document.

#### Parameters
- description <code>string</code> | <code>undefined</code>  
The description of the document or `undefined` to unset the description

**Return value**  
[<code>Meta</code>](#Meta) - The `Meta` object

**Example**  
```js
const meta = new Meta();
meta.setDescription('Memoirs of the yellow man wearing blue trousers');
```
**Since**: 0.6.0  

* * *

<a name="Meta+getDescription"></a>

### `meta.getDescription()` ⇒ <code>string</code> \| <code>undefined</code>
The `getDescription()` method returns the description of the document.

**Return value**  
<code>string</code> \| <code>undefined</code> - The description of the document or `undefined` if the description is not set

**Example**  
```js
const meta = new Meta();
meta.getDescription(); // undefined
meta.setDescription('Memoirs of the yellow man wearing blue trousers');
meta.getDescription(); // 'Memoirs of the yellow man wearing blue trousers'
```
**Since**: 0.6.0  

* * *

<a name="Meta+getEditingCycles"></a>

### `meta.getEditingCycles()` ⇒ <code>number</code>
The `getEditingCycles()` method returns the number of times the document has been edited.

When the `Meta` instance is being created, the value is set to `1`.

**Return value**  
<code>number</code> - The number of times a document has been edited

**Example**  
```js
const meta = new Meta();
meta.getEditingCycles(); // 1
```
**Since**: 0.6.0  

* * *

<a name="Meta+getGenerator"></a>

### `meta.getGenerator()` ⇒ <code>string</code>
The `getGenerator()` method returns a string that identifies **simple-odf** as the OpenDocument producer
that was used to create the document.
The string matches the definition for user-agents as defined in [RFC2616](http://www.ietf.org/rfc/rfc2616.txt).

**Return value**  
<code>string</code> - A string that identifies **simple-odf** as the OpenDocument producer of this document

**Example**  
```js
const meta = new Meta();
meta.getGenerator(); // simple-odf/0.6.0
```
**Since**: 0.6.0  

* * *

<a name="Meta+setInitialCreator"></a>

### `meta.setInitialCreator(initialCreator)` ⇒ [<code>Meta</code>](#Meta)
The `setInitialCreator()` method sets the name of the initial creator of the document.

The initial creator is initialized with the username of the currently effective user.

#### Parameters
- initialCreator <code>string</code> | <code>undefined</code>  
The name of the initial creator of the document
                                           or `undefined` to unset the initial creator

**Return value**  
[<code>Meta</code>](#Meta) - The `Meta` object

**Example**  
```js
const meta = new Meta();                // 'Homer Simpson'
meta.setInitialCreator('Bart Simpson'); // 'Bart Simpson'
meta.setInitialCreator(undefined);      // undefined
```
**Since**: 0.6.0  

* * *

<a name="Meta+getInitialCreator"></a>

### `meta.getInitialCreator()` ⇒ <code>string</code> \| <code>undefined</code>
The `getInitialCreator()` method returns the name of the initial creator of the document.

**Return value**  
<code>string</code> \| <code>undefined</code> - The name of the initial creator of the document
                              or `undefined` if the initial creator is not set

**Example**  
```js
const meta = new Meta();
meta.getInitialCreator();               // 'Homer Simpson'
meta.setInitialCreator('Bart Simpson');
meta.getInitialCreator();               // 'Bart Simpson'
```
**Since**: 0.6.0  

* * *

<a name="Meta+addKeyword"></a>

### `meta.addKeyword(keyword)` ⇒ [<code>Meta</code>](#Meta)
The `addKeyword()` method adds a keyword pertaining to a document to the end of the keyword list.
If the given string includes comma characters, the string will be split and added as multiple key words.

#### Parameters
- keyword <code>string</code>  
The keyword to add to the end of the keyword list

**Return value**  
[<code>Meta</code>](#Meta) - The `Meta` object

**Example**  
```js
const meta = new Meta();                       // []
meta.addKeyword('memoirs');                    // ['memoirs']
meta.addKeyword('Simpson,family,Springfield'); // ['memoirs', 'Simpson', 'family', 'Springfield']
```
**Since**: 0.6.0  

* * *

<a name="Meta+getKeywords"></a>

### `meta.getKeywords()` ⇒ <code>Array.&lt;string&gt;</code>
The `getKeywords()` method returns a new `Array` object that contains the keywords of the document.

**Return value**  
<code>Array.&lt;string&gt;</code> - A new `Array` object that contains the keywords of the document

**Example**  
```js
const meta = new Meta();
meta.getKeywords();                     // []
meta.addKeyword('Simpson,Springfield');
meta.getKeywords();                     // ['Simpson', 'Springfield']
```
**Since**: 0.6.0  

* * *

<a name="Meta+removeKeyword"></a>

### `meta.removeKeyword(keyword)` ⇒ [<code>Meta</code>](#Meta)
The `removeKeyword()` method removes the specified keyword from the keyword list.

#### Parameters
- keyword <code>string</code>  
The keyword to remove from the keyword list

**Return value**  
[<code>Meta</code>](#Meta) - The `Meta` object

**Example**  
```js
const meta = new Meta();
meta.addKeyword('Simpson,Springfield'); // ['Simpson', 'Springfield']
meta.removeKeyword('Simpson');          // ['Springfield']
```
**Since**: 0.6.0  

* * *

<a name="Meta+clearKeywords"></a>

### `meta.clearKeywords()` ⇒ [<code>Meta</code>](#Meta)
The `clearKeywords()` method removes all elements from the keyword list.

**Return value**  
[<code>Meta</code>](#Meta) - The `Meta` object

**Example**  
```js
const meta = new Meta();
meta.addKeyword('Simpson,Springfield'); // ['Simpson', 'Springfield']
meta.clearKeywords();                   // []
```
**Since**: 0.6.0  

* * *

<a name="Meta+setLanguage"></a>

### `meta.setLanguage(language)` ⇒ [<code>Meta</code>](#Meta)
The `setLanguage()` method sets default language of the document.
A language is a natural language identifier as defined by [RFC5646](http://www.ietf.org/rfc/rfc5646.txt).
If an illegal value is provided, the value will be ignored.

#### Parameters
- language <code>string</code> | <code>undefined</code>  
The default language of the document
                                     or `undefined` to unset the default language

**Return value**  
[<code>Meta</code>](#Meta) - The `Meta` object

**Example**  
```js
const meta = new Meta();     // undefined
meta.setLanguage('en-US');   // 'en-US'
meta.setLanguage('illegal'); // 'en-US'
```
**Since**: 0.6.0  

* * *

<a name="Meta+getLanguage"></a>

### `meta.getLanguage()` ⇒ <code>string</code> \| <code>undefined</code>
The `getLanguage()` method returns the default language of the document.

**Return value**  
<code>string</code> \| <code>undefined</code> - The default language of the document
                              or `undefined` if the default language is not set

**Example**  
```js
const meta = new Meta();
meta.getLanguage();        // undefined
meta.setLanguage('en-US');
meta.getLanguage();        // 'en-US'
```
**Since**: 0.6.0  

* * *

<a name="Meta+setPrintDate"></a>

### `meta.setPrintDate(printDate)` ⇒ [<code>Meta</code>](#Meta)
The `setPrintDate()` method sets the date and time when the document was last printed.

#### Parameters
- printDate <code>number</code> | <code>undefined</code>  
The UTC timestamp specifying the date and time when the document was last
                                      printed or `undefined` to unset the print date

**Return value**  
[<code>Meta</code>](#Meta) - The `Meta` object

**Example**  
```js
const meta = new Meta();
meta.setPrintDate(Date.now()); // 2020-07-23 13:37:00
```
**Since**: 0.6.0  

* * *

<a name="Meta+getPrintDate"></a>

### `meta.getPrintDate()` ⇒ <code>number</code> \| <code>undefined</code>
The `getPrintDate()` method returns the date and time when the document was last printed.

**Return value**  
<code>number</code> \| <code>undefined</code> - The UTC timestamp specifying the date and time when the document was last printed
                              or `undefined` if the print date is not set

**Example**  
```js
const meta = new Meta();
meta.getPrintDate();           // undefined
meta.setPrintDate(Date.now()); // 2020-07-23 13:37:00
meta.getPrintDate();           // 1595511420000
```
**Since**: 0.6.0  

* * *

<a name="Meta+setPrintedBy"></a>

### `meta.setPrintedBy(printedBy)` ⇒ [<code>Meta</code>](#Meta)
The `setPrintedBy()` method sets the name of the last person who printed the document.

#### Parameters
- printedBy <code>string</code> | <code>undefined</code>  
The name of the last person who printed the document
                                      or `undefined` to unset the name of the person

**Return value**  
[<code>Meta</code>](#Meta) - The `Meta` object

**Example**  
```js
const meta = new Meta();
meta.setPrintedBy('Marge Simpson'); // 'Marge Simpson'
meta.setPrintedBy(undefined);       // undefined
```
**Since**: 0.6.0  

* * *

<a name="Meta+getPrintedBy"></a>

### `meta.getPrintedBy()` ⇒ <code>string</code> \| <code>undefined</code>
The `getPrintedBy()` method returns the name of the last person who printed the document.

**Return value**  
<code>string</code> \| <code>undefined</code> - The name of the last person who printed the document
                              or `undefined` if the name of the person is not set

**Example**  
```js
const meta = new Meta();
meta.getPrintedBy();                // undefined
meta.setPrintedBy('Marge Simpson');
meta.getPrintedBy();                // 'Marge Simpson'
```
**Since**: 0.6.0  

* * *

<a name="Meta+setSubject"></a>

### `meta.setSubject(subject)` ⇒ [<code>Meta</code>](#Meta)
The `setSubject()` method sets the subject of the document.

#### Parameters
- subject <code>string</code> | <code>undefined</code>  
The subject of the document or `undefined` to unset the subject

**Return value**  
[<code>Meta</code>](#Meta) - The `Meta` object

**Example**  
```js
const meta = new Meta();
meta.setSubject('Simpsons'); // 'Simpsons'
meta.setSubject(undefined);  // undefined
```
**Since**: 0.6.0  

* * *

<a name="Meta+getSubject"></a>

### `meta.getSubject()` ⇒ <code>string</code> \| <code>undefined</code>
The `getSubject()` method returns the subject of the document.

**Return value**  
<code>string</code> \| <code>undefined</code> - The subject of the document or `undefined` if the subject is not set

**Example**  
```js
const meta = new Meta();
meta.getSubject();           // undefined
meta.setSubject('Simpsons');
meta.getSubject();           // 'Simpsons'
```
**Since**: 0.6.0  

* * *

<a name="Meta+setTitle"></a>

### `meta.setTitle(title)` ⇒ [<code>Meta</code>](#Meta)
The `setTitle()` method sets the title of the document.

#### Parameters
- title <code>string</code> | <code>undefined</code>  
The title of the document or `undefined` to unset the title

**Return value**  
[<code>Meta</code>](#Meta) - The `Meta` object

**Example**  
```js
const meta = new Meta();
meta.setTitle('Memoirs of Homer Simpson'); // 'Memoirs of Homer Simpson'
meta.setTitle(undefined);                  // undefined
```
**Since**: 0.6.0  

* * *

<a name="Meta+getTitle"></a>

### `meta.getTitle()` ⇒ <code>string</code> \| <code>undefined</code>
The `getTitle()` method returns the title of the document.

**Return value**  
<code>string</code> \| <code>undefined</code> - The title of the document or `undefined` if the title is not set

**Example**  
```js
const meta = new Meta();
meta.getTitle();                           // undefined
meta.setTitle('Memoirs of Homer Simpson');
meta.getTitle();                           // 'Memoirs of Homer Simpson'
```
**Since**: 0.6.0  

* * *

<a name="Meta+toXml"></a>

### `meta.toXml(document, root)`
Transforms the text style into Open Document Format.

#### Parameters
- document <code>Document</code>  
The XML document
- root <code>Element</code>  
The root node in the DOM

**Since**: 0.6.0  

* * *

<a name="Color"></a>

## Color
This class represents a Color.

**Since**: 0.4.0  

* [Color](#Color)
    * [`new Color(red, green, blue)`](#new_Color_new)
    * _instance_
        * [`.toHex()`](#Color+toHex) ⇒ <code>string</code>
    * _static_
        * [`.fromHex(value)`](#Color.fromHex) ⇒ [<code>Color</code>](#Color) \| <code>undefined</code>
        * [`.fromRgb(red, green, blue)`](#Color.fromRgb) ⇒ [<code>Color</code>](#Color) \| <code>undefined</code>


* * *

<a name="new_Color_new"></a>

### `new Color(red, green, blue)`
Creates a new color with the specified channel values.

#### Parameters
- red <code>number</code>  
The red channel of the color
- green <code>number</code>  
The green channel of the color
- blue <code>number</code>  
The blue channel of the color


* * *

<a name="Color+toHex"></a>

### `color.toHex()` ⇒ <code>string</code>
The toHex() method returns a string representing the color as hex string.

**Return value**  
<code>string</code> - A hex string representing the color

**Since**: 0.4.0  

* * *

<a name="Color.fromHex"></a>

### `Color.fromHex(value)` ⇒ [<code>Color</code>](#Color) \| <code>undefined</code>
The `Color.fromHex()` method parses a string argument and returns a color.
The string is expected to be in `#rrggbb` or `rrggbb` format.

#### Parameters
- value <code>string</code>  
The value you want to parse

**Return value**  
[<code>Color</code>](#Color) \| <code>undefined</code> - A color parsed from the given value.
If the value cannot be converted to a color, `undefined` is returned.

**Since**: 0.4.0  

* * *

<a name="Color.fromRgb"></a>

### `Color.fromRgb(red, green, blue)` ⇒ [<code>Color</code>](#Color) \| <code>undefined</code>
The `Color.fromRgb()` method returns a color with the channel arguments.

#### Parameters
- red <code>number</code>  
The red channel of the color with a range of 0...255
- green <code>number</code>  
The green channel of the color with a range of 0...255
- blue <code>number</code>  
The blue channel of the color with a range of 0...255

**Return value**  
[<code>Color</code>](#Color) \| <code>undefined</code> - A color parsed from the given value.
If any channel is outside the allowable range, `undefined` is returned.

**Since**: 0.4.0  

* * *

<a name="ImageStyle"></a>

## ImageStyle
This class represents the style of an image

**Since**: 0.5.0  

* [ImageStyle](#ImageStyle)
    * [`new ImageStyle()`](#new_ImageStyle_new)
    * [`.setAnchorType()`](#ImageStyle+setAnchorType)
    * [`.getAnchorType()`](#ImageStyle+getAnchorType)
    * [`.setHeight(height)`](#ImageStyle+setHeight)
    * [`.getHeight()`](#ImageStyle+getHeight) ⇒ <code>number</code> \| <code>undefined</code>
    * [`.setWidth(width)`](#ImageStyle+setWidth)
    * [`.getWidth()`](#ImageStyle+getWidth) ⇒ <code>number</code> \| <code>undefined</code>
    * [`.setSize(width, height)`](#ImageStyle+setSize)
    * [`.toXml()`](#ImageStyle+toXml)


* * *

<a name="new_ImageStyle_new"></a>

### `new ImageStyle()`
Constructor.


* * *

<a name="ImageStyle+setAnchorType"></a>

### `imageStyle.setAnchorType()`

* * *

<a name="ImageStyle+getAnchorType"></a>

### `imageStyle.getAnchorType()`

* * *

<a name="ImageStyle+setHeight"></a>

### `imageStyle.setHeight(height)`
Sets the target height of the image.

#### Parameters
- height <code>number</code>  
The target height of the image in millimeter

**Since**: 0.5.0  

* * *

<a name="ImageStyle+getHeight"></a>

### `imageStyle.getHeight()` ⇒ <code>number</code> \| <code>undefined</code>
Returns the target height of the image or `undefined` if no height was set.

**Return value**  
<code>number</code> \| <code>undefined</code> - The target height of the image in millimeter or `undefined` if no height was set

**Since**: 0.5.0  

* * *

<a name="ImageStyle+setWidth"></a>

### `imageStyle.setWidth(width)`
Sets the target width of the image.

#### Parameters
- width <code>number</code>  
The target width of the image in millimeter

**Since**: 0.5.0  

* * *

<a name="ImageStyle+getWidth"></a>

### `imageStyle.getWidth()` ⇒ <code>number</code> \| <code>undefined</code>
Returns the target width of the image or `undefined` if no width was set.

**Return value**  
<code>number</code> \| <code>undefined</code> - The target width of the image in millimeter or `undefined` if no width was set

**Since**: 0.5.0  

* * *

<a name="ImageStyle+setSize"></a>

### `imageStyle.setSize(width, height)`
Sets the target size of the image.

#### Parameters
- width <code>number</code>  
The target width of the image in millimeter
- height <code>number</code>  
The target height of the image in millimeter

**Since**: 0.5.0  

* * *

<a name="ImageStyle+toXml"></a>

### `imageStyle.toXml()`

* * *

<a name="ParagraphStyle"></a>

## ParagraphStyle
This class represents the style of a paragraph

**Since**: 0.4.0  

* [ParagraphStyle](#ParagraphStyle)
    * [`new ParagraphStyle()`](#new_ParagraphStyle_new)
    * [`.setColor()`](#ParagraphStyle+setColor)
    * [`.getColor()`](#ParagraphStyle+getColor)
    * [`.setFontName()`](#ParagraphStyle+setFontName)
    * [`.getFontName()`](#ParagraphStyle+getFontName)
    * [`.setFontSize()`](#ParagraphStyle+setFontSize)
    * [`.getFontSize()`](#ParagraphStyle+getFontSize)
    * [`.setTextTransformation()`](#ParagraphStyle+setTextTransformation)
    * [`.getTextTransformation()`](#ParagraphStyle+getTextTransformation)
    * [`.setTypeface()`](#ParagraphStyle+setTypeface)
    * [`.getTypeface()`](#ParagraphStyle+getTypeface)
    * [`.setHorizontalAlignment()`](#ParagraphStyle+setHorizontalAlignment)
    * [`.getHorizontalAlignment()`](#ParagraphStyle+getHorizontalAlignment)
    * [`.setPageBreakBefore()`](#ParagraphStyle+setPageBreakBefore)
    * [`.setKeepTogether()`](#ParagraphStyle+setKeepTogether)
    * [`.getTabStops()`](#ParagraphStyle+getTabStops)
    * [`.clearTabStops()`](#ParagraphStyle+clearTabStops)
    * [`.toXml()`](#ParagraphStyle+toXml)


* * *

<a name="new_ParagraphStyle_new"></a>

### `new ParagraphStyle()`
Constructor.


* * *

<a name="ParagraphStyle+setColor"></a>

### `paragraphStyle.setColor()`

* * *

<a name="ParagraphStyle+getColor"></a>

### `paragraphStyle.getColor()`

* * *

<a name="ParagraphStyle+setFontName"></a>

### `paragraphStyle.setFontName()`

* * *

<a name="ParagraphStyle+getFontName"></a>

### `paragraphStyle.getFontName()`

* * *

<a name="ParagraphStyle+setFontSize"></a>

### `paragraphStyle.setFontSize()`

* * *

<a name="ParagraphStyle+getFontSize"></a>

### `paragraphStyle.getFontSize()`

* * *

<a name="ParagraphStyle+setTextTransformation"></a>

### `paragraphStyle.setTextTransformation()`

* * *

<a name="ParagraphStyle+getTextTransformation"></a>

### `paragraphStyle.getTextTransformation()`

* * *

<a name="ParagraphStyle+setTypeface"></a>

### `paragraphStyle.setTypeface()`

* * *

<a name="ParagraphStyle+getTypeface"></a>

### `paragraphStyle.getTypeface()`

* * *

<a name="ParagraphStyle+setHorizontalAlignment"></a>

### `paragraphStyle.setHorizontalAlignment()`

* * *

<a name="ParagraphStyle+getHorizontalAlignment"></a>

### `paragraphStyle.getHorizontalAlignment()`

* * *

<a name="ParagraphStyle+setPageBreakBefore"></a>

### `paragraphStyle.setPageBreakBefore()`

* * *

<a name="ParagraphStyle+setKeepTogether"></a>

### `paragraphStyle.setKeepTogether()`

* * *

<a name="ParagraphStyle+getTabStops"></a>

### `paragraphStyle.getTabStops()`

* * *

<a name="ParagraphStyle+clearTabStops"></a>

### `paragraphStyle.clearTabStops()`

* * *

<a name="ParagraphStyle+toXml"></a>

### `paragraphStyle.toXml()`

* * *

<a name="StyleHelper"></a>

## StyleHelper
Utility class for dealing with styles.

**Since**: 0.4.0  

* * *

<a name="StyleHelper.getAutomaticStylesElement"></a>

### `StyleHelper.getAutomaticStylesElement(document)` ⇒ <code>Element</code>
Returns the `automatic-styles` element of the document.
If there is no such element yet, it will be created.

#### Parameters
- document <code>Document</code>  
The XML document

**Return value**  
<code>Element</code> - The documents `automatic-styles` element

**Since**: 0.4.0  

* * *

<a name="TabStop"></a>

## TabStop
This class represents a tab stop.

Tab stops are used to align text in a paragraph.
To become effective they must be set to the style of the respective paragraph.

**Since**: 0.3.0  

* [TabStop](#TabStop)
    * [`new TabStop([position], [type])`](#new_TabStop_new)
    * [`.setPosition(position)`](#TabStop+setPosition)
    * [`.getPosition()`](#TabStop+getPosition) ⇒ <code>number</code>
    * [`.setType(type)`](#TabStop+setType)
    * [`.getType()`](#TabStop+getType) ⇒ <code>TabStopType</code>
    * [`.toXml(document, parent)`](#TabStop+toXml)


* * *

<a name="new_TabStop_new"></a>

### `new TabStop([position], [type])`
Creates a tab stop to be set to the style of a paragraph.

#### Parameters
- [position] <code>number</code>  
The position of the tab stop in centimeters relative to the left margin.
If a negative value is given, the `position` will be set to `0`.
- [type] <code>TabStopType</code>  
The type of the tab stop. Defaults to `TabStopType.Left`.

**Example**  
```js
// creates a right aligned tab stop with a distance of 4 cm from the left margin
const tabStop4 = new TabStop(4, TabStopType.Right);
paragraph.getStyle().addTabStop(tabStop4);
```

* * *

<a name="TabStop+setPosition"></a>

### `tabStop.setPosition(position)`
Sets the position of this tab stop.

#### Parameters
- position <code>number</code>  
The position of the tab stop in centimeters relative to the left margin.
If a negative value is given, the `position` will be set to `0`.

**Since**: 0.3.0  

* * *

<a name="TabStop+getPosition"></a>

### `tabStop.getPosition()` ⇒ <code>number</code>
Returns the position of this tab stop.

**Return value**  
<code>number</code> - The position of this tab stop in centimeters

**Since**: 0.3.0  

* * *

<a name="TabStop+setType"></a>

### `tabStop.setType(type)`
Sets the type of this tab stop.

#### Parameters
- type <code>TabStopType</code>  
The type of the tab stop

**Since**: 0.3.0  

* * *

<a name="TabStop+getType"></a>

### `tabStop.getType()` ⇒ <code>TabStopType</code>
Returns the type of this tab stop.

**Return value**  
<code>TabStopType</code> - The type of this tab stop

**Since**: 0.3.0  

* * *

<a name="TabStop+toXml"></a>

### `tabStop.toXml(document, parent)`
Transforms the tab stop into Open Document Format.

#### Parameters
- document <code>Document</code>  
The XML document
- parent <code>Element</code>  
The parent node in the DOM (`style:tab-stops`)

**Since**: 0.3.0  

* * *

<a name="Heading"></a>

## Heading
This class represents a heading.

**Since**: 0.1.0  

* [Heading](#Heading)
    * [`new Heading([text], [level])`](#new_Heading_new)
    * [`.setLevel(level)`](#Heading+setLevel)
    * [`.getLevel()`](#Heading+getLevel) ⇒ <code>number</code>
    * [`.createElement()`](#Heading+createElement)


* * *

<a name="new_Heading_new"></a>

### `new Heading([text], [level])`
Creates a heading

#### Parameters
- [text] <code>string</code>  
The text content of the heading
- [level] <code>number</code>  
The heading level; defaults to 1 if omitted


* * *

<a name="Heading+setLevel"></a>

### `heading.setLevel(level)`
Sets the level of this heading.

#### Parameters
- level <code>number</code>  
The heading level

**Since**: 0.1.0  

* * *

<a name="Heading+getLevel"></a>

### `heading.getLevel()` ⇒ <code>number</code>
Returns the level of this heading.

**Return value**  
<code>number</code> - The heading level

**Since**: 0.1.0  

* * *

<a name="Heading+createElement"></a>

### `heading.createElement()`

* * *

<a name="Hyperlink"></a>

## Hyperlink
This class represents a hyperlink in a paragraph.

**Since**: 0.3.0  

* [Hyperlink](#Hyperlink)
    * [`new Hyperlink(text, uri)`](#new_Hyperlink_new)
    * [`.setURI(uri)`](#Hyperlink+setURI)
    * [`.getURI()`](#Hyperlink+getURI) ⇒ <code>string</code>
    * [`.toXml()`](#Hyperlink+toXml)


* * *

<a name="new_Hyperlink_new"></a>

### `new Hyperlink(text, uri)`
Creates a hyperlink

#### Parameters
- text <code>string</code>  
The text content of the hyperlink
- uri <code>string</code>  
The target URI of the hyperlink


* * *

<a name="Hyperlink+setURI"></a>

### `hyperlink.setURI(uri)`
Sets the target URI for this hyperlink.

#### Parameters
- uri <code>string</code>  
The new target URI

**Since**: 0.3.0  

* * *

<a name="Hyperlink+getURI"></a>

### `hyperlink.getURI()` ⇒ <code>string</code>
Returns the target URI of this hyperlink.

**Return value**  
<code>string</code> - The target URI

**Since**: 0.3.0  

* * *

<a name="Hyperlink+toXml"></a>

### `hyperlink.toXml()`

* * *

<a name="List"></a>

## List
This class represents a list.
It can contain multiple list items.

**Since**: 0.2.0  

* [List](#List)
    * [`new List()`](#new_List_new)
    * [`.addItem([item])`](#List+addItem) ⇒ [<code>ListItem</code>](#ListItem)
    * [`.insertItem(position, item)`](#List+insertItem) ⇒ [<code>ListItem</code>](#ListItem)
    * [`.getItem(position)`](#List+getItem) ⇒ [<code>ListItem</code>](#ListItem) \| <code>undefined</code>
    * [`.getItems()`](#List+getItems) ⇒ [<code>Array.&lt;ListItem&gt;</code>](#ListItem)
    * [`.removeItemAt(position)`](#List+removeItemAt) ⇒ [<code>ListItem</code>](#ListItem) \| <code>undefined</code>
    * [`.clear()`](#List+clear)
    * [`.size()`](#List+size) ⇒ <code>number</code>
    * [`.toXml()`](#List+toXml)


* * *

<a name="new_List_new"></a>

### `new List()`
Creates a list


* * *

<a name="List+addItem"></a>

### `list.addItem([item])` ⇒ [<code>ListItem</code>](#ListItem)
Adds a new list item with the specified text or adds the specified item to the list.

#### Parameters
- [item] <code>string</code> | [<code>ListItem</code>](#ListItem)  
The text content of the new item or the item to add

**Return value**  
[<code>ListItem</code>](#ListItem) - The newly added list item

**Since**: 0.2.0  

* * *

<a name="List+insertItem"></a>

### `list.insertItem(position, item)` ⇒ [<code>ListItem</code>](#ListItem)
Inserts a new list item with the specified text or inserts the specified item at the specified position.
The item is inserted before the item at the specified position.

#### Parameters
- position <code>number</code>  
The index at which to insert the list item (starting from 0).
- item <code>string</code> | [<code>ListItem</code>](#ListItem)  
The text content of the new item or the item to insert

**Return value**  
[<code>ListItem</code>](#ListItem) - The newly added list item

**Since**: 0.2.0  

* * *

<a name="List+getItem"></a>

### `list.getItem(position)` ⇒ [<code>ListItem</code>](#ListItem) \| <code>undefined</code>
Returns the item at the specified position in this list.
If an invalid position is given, undefined is returned.

#### Parameters
- position <code>number</code>  
The index of the requested the list item (starting from 0).

**Return value**  
[<code>ListItem</code>](#ListItem) \| <code>undefined</code> - The list item at the specified position
or undefined if there is no list item at the specified position

**Since**: 0.2.0  

* * *

<a name="List+getItems"></a>

### `list.getItems()` ⇒ [<code>Array.&lt;ListItem&gt;</code>](#ListItem)
Returns all list items.

**Return value**  
[<code>Array.&lt;ListItem&gt;</code>](#ListItem) - A copy of the list of list items

**Since**: 0.2.0  

* * *

<a name="List+removeItemAt"></a>

### `list.removeItemAt(position)` ⇒ [<code>ListItem</code>](#ListItem) \| <code>undefined</code>
Removes the list item from the specified position.

#### Parameters
- position <code>number</code>  
The index of the list item to remove (starting from 0).

**Return value**  
[<code>ListItem</code>](#ListItem) \| <code>undefined</code> - The removed list item
or undefined if there is no list item at the specified position

**Since**: 0.2.0  

* * *

<a name="List+clear"></a>

### `list.clear()`
Removes all items from this list.

**Since**: 0.2.0  

* * *

<a name="List+size"></a>

### `list.size()` ⇒ <code>number</code>
Returns the number of items in this list.

**Return value**  
<code>number</code> - The number of items in this list

**Since**: 0.2.0  

* * *

<a name="List+toXml"></a>

### `list.toXml()`

* * *

<a name="ListItem"></a>

## ListItem
This class represents an item in a list.

**Since**: 0.2.0  

* [ListItem](#ListItem)
    * [`new ListItem([text])`](#new_ListItem_new)
    * [`.toXml()`](#ListItem+toXml)


* * *

<a name="new_ListItem_new"></a>

### `new ListItem([text])`
Creates a list item

#### Parameters
- [text] <code>string</code>  
The text content of the list item


* * *

<a name="ListItem+toXml"></a>

### `listItem.toXml()`

* * *

<a name="Paragraph"></a>

## Paragraph
This class represents a paragraph.

**Since**: 0.1.0  

* [Paragraph](#Paragraph)
    * [`new Paragraph([text])`](#new_Paragraph_new)
    * [`.addText(text)`](#Paragraph+addText)
    * [`.getText()`](#Paragraph+getText) ⇒ <code>string</code>
    * [`.setText(text)`](#Paragraph+setText)
    * [`.addHyperlink(text, uri)`](#Paragraph+addHyperlink) ⇒ [<code>Hyperlink</code>](#Hyperlink)
    * [`.addImage(path)`](#Paragraph+addImage) ⇒ [<code>Image</code>](#Image)
    * [`.setStyle(style)`](#Paragraph+setStyle)
    * [`.getStyle()`](#Paragraph+getStyle) ⇒ <code>IParagraphStyle</code> \| <code>undefined</code>
    * [`.createElement(document)`](#Paragraph+createElement) ⇒ <code>Element</code>
    * [`.toXml()`](#Paragraph+toXml)


* * *

<a name="new_Paragraph_new"></a>

### `new Paragraph([text])`
Creates a paragraph

#### Parameters
- [text] <code>string</code>  
The text content of the paragraph


* * *

<a name="Paragraph+addText"></a>

### `paragraph.addText(text)`
Appends the specified text to the end of this paragraph.

#### Parameters
- text <code>string</code>  
The additional text content

**Since**: 0.1.0  

* * *

<a name="Paragraph+getText"></a>

### `paragraph.getText()` ⇒ <code>string</code>
Returns the text content of this paragraph.
Note: This will only return the text; other elements and markup will be omitted.

**Return value**  
<code>string</code> - The text content of this paragraph

**Since**: 0.1.0  

* * *

<a name="Paragraph+setText"></a>

### `paragraph.setText(text)`
Sets the text content of this paragraph.
Note: This will replace any existing content of the paragraph.

#### Parameters
- text <code>string</code>  
The new text content

**Since**: 0.1.0  

* * *

<a name="Paragraph+addHyperlink"></a>

### `paragraph.addHyperlink(text, uri)` ⇒ [<code>Hyperlink</code>](#Hyperlink)
Appends the specified text as hyperlink to the end of this paragraph.

#### Parameters
- text <code>string</code>  
The text content of the hyperlink
- uri <code>string</code>  
The target URI of the hyperlink

**Return value**  
[<code>Hyperlink</code>](#Hyperlink) - The newly added hyperlink

**Since**: 0.3.0  

* * *

<a name="Paragraph+addImage"></a>

### `paragraph.addImage(path)` ⇒ [<code>Image</code>](#Image)
Appends the image of the denoted path to the end of this paragraph.
The current paragraph will be set as anchor for the image.

#### Parameters
- path <code>string</code>  
The path to the image file

**Return value**  
[<code>Image</code>](#Image) - The newly added image

**Since**: 0.3.0  

* * *

<a name="Paragraph+setStyle"></a>

### `paragraph.setStyle(style)`
Sets the new style of this paragraph.
To reset the style, `undefined` must be given.

#### Parameters
- style <code>IParagraphStyle</code> | <code>undefined</code>  
The new style or `undefined` to reset the style

**Since**: 0.3.0  

* * *

<a name="Paragraph+getStyle"></a>

### `paragraph.getStyle()` ⇒ <code>IParagraphStyle</code> \| <code>undefined</code>
Returns the style of this paragraph.

**Return value**  
<code>IParagraphStyle</code> \| <code>undefined</code> - The style of the paragraph or `undefined` if no style was set

**Since**: 0.3.0  

* * *

<a name="Paragraph+createElement"></a>

### `paragraph.createElement(document)` ⇒ <code>Element</code>
Creates the paragraph element.

#### Parameters
- document <code>Document</code>  
The XML document

**Return value**  
<code>Element</code> - The DOM element representing this paragraph

**Since**: 0.1.0  

* * *

<a name="Paragraph+toXml"></a>

### `paragraph.toXml()`

* * *

<a name="TextDocument"></a>

## TextDocument
This class represents an empty ODF text document.

**Since**: 0.1.0  

* [TextDocument](#TextDocument)
    * [`.getMeta()`](#TextDocument+getMeta) ⇒ [<code>Meta</code>](#Meta)
    * [`.declareFont(name, fontFamily, fontPitch)`](#TextDocument+declareFont)
    * [`.addHeading([text], [level])`](#TextDocument+addHeading) ⇒ [<code>Heading</code>](#Heading)
    * [`.addList()`](#TextDocument+addList) ⇒ [<code>List</code>](#List)
    * [`.addParagraph([text])`](#TextDocument+addParagraph) ⇒ [<code>Paragraph</code>](#Paragraph)
    * [`.saveFlat(filePath)`](#TextDocument+saveFlat) ⇒ <code>Promise.&lt;void&gt;</code>
    * ~~[`.toString()`](#TextDocument+toString) ⇒ <code>string</code>~~
    * [`.toXml()`](#TextDocument+toXml)


* * *

<a name="TextDocument+getMeta"></a>

### `textDocument.getMeta()` ⇒ [<code>Meta</code>](#Meta)
The `getMeta()` method returns the metadata of the document.

**Return value**  
[<code>Meta</code>](#Meta) - An object holding the metadata of the document

**See**: [Meta](#Meta)  
**Example**  
```js
document.getMeta().setCreator('Lisa Simpson');
```
**Since**: 0.6.0  

* * *

<a name="TextDocument+declareFont"></a>

### `textDocument.declareFont(name, fontFamily, fontPitch)`
Declares a font to be used in the document.

**Note: There is no check whether the font exists.
In order to be displayed properly, the font must be present on the target system.**

#### Parameters
- name <code>string</code>  
The name of the font; this name must be set to a [ParagraphStyle](#ParagraphStyle)
- fontFamily <code>string</code>  
The name of the font family
- fontPitch <code>FontPitch</code>  
The ptich of the fonr

**Since**: 0.4.0  

* * *

<a name="TextDocument+addHeading"></a>

### `textDocument.addHeading([text], [level])` ⇒ [<code>Heading</code>](#Heading)
Adds a heading at the end of the document.
If a text is given, this will be set as text content of the heading.

#### Parameters
- [text] <code>string</code>  
The text content of the heading
- [level] <code>number</code> <code> = 1</code>  
The heading level; defaults to 1 if omitted

**Return value**  
[<code>Heading</code>](#Heading) - The newly added heading

**Since**: 0.1.0  

* * *

<a name="TextDocument+addList"></a>

### `textDocument.addList()` ⇒ [<code>List</code>](#List)
Adds an empty list at the end of the document.

**Return value**  
[<code>List</code>](#List) - The newly added list

**Since**: 0.2.0  

* * *

<a name="TextDocument+addParagraph"></a>

### `textDocument.addParagraph([text])` ⇒ [<code>Paragraph</code>](#Paragraph)
Adds a paragraph at the end of the document.
If a text is given, this will be set as text content of the paragraph.

#### Parameters
- [text] <code>string</code>  
The text content of the paragraph

**Return value**  
[<code>Paragraph</code>](#Paragraph) - The newly added paragraph

**Since**: 0.1.0  

* * *

<a name="TextDocument+saveFlat"></a>

### `textDocument.saveFlat(filePath)` ⇒ <code>Promise.&lt;void&gt;</code>
Saves the document in flat open document xml format.

#### Parameters
- filePath <code>string</code>  
The file path to write to

**Since**: 0.1.0  

* * *

<a name="TextDocument+toString"></a>

### ~~`textDocument.toString()` ⇒ <code>string</code>~~
***Deprecated***

Returns the string representation of this document in flat open document xml format.

**Return value**  
<code>string</code> - The string representation of this document

**Since**: 0.1.0  

* * *

<a name="TextDocument+toXml"></a>

### `textDocument.toXml()`

* * *

