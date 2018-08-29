# Image Preview JS

Image Preview JS is a JavaScript module to preview images.

## Installation

Download or clone the repository.

~~~git
git clone https://github.com/fenyr-sh/image-preview-js.git
~~~

You can also download it using npm.

~~~npm
npm i image-preview-js
~~~

## Usage

Add the **dist/js/app.js** file to your site.

~~~html
<script src="dist/js/app.js"></script>
~~~

Optionally you can include the stylesheet **dist/css/app.css**.

~~~html
<link rel="stylesheet" href="dist/css/app.css">
~~~

### Example

The input must contain a `preview` attribute where the value of the attribute must
be equal to the `id` of the container where the images will be displayed.

~~~html
<!-- Image Preview -->
<div class="custom-preview" style="width: 300px">
    <label class="custom-preview-label" for="">Image Preview</label>
    <input class="custom-preview-input" type="file" name="" id="" preview="image-preview">
</div>

<div class="preview" id="image-preview"></div>

<!-- Image Preview 2 -->
<div class="custom-preview" style="width: 300px">
    <label class="custom-preview-label" for="">Image Preview 2</label>
    <input class="custom-preview-input" type="file" name="" id="" preview="image-preview2">
</div>

<div class="preview" id="image-preview2"></div>
~~~

## Screenshot

![Alternate text](assets/images/image-preview.png)