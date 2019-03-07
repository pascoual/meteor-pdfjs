# pdfjs

PDF rendering for your Meteor application (client only).
This package use the Mozilla's PDF reader built with HTML5 and JavaScript

If you need server side PDF rendering, please use pdf.js Meteor package from Mitar:
https://github.com/peerlibrary/meteor-pdf.js

## Quick Start
1. Install the Meteor package using [mgp](https://www.npmjs.com/package/mgp)
2. Example:

```html
<!-- In your template -->
<canvas id="pdfcanvas"></canvas>
```
```js
/* In your Template.xxx.rendered */
import PDFJS from 'meteor/geekho:pdfjs';

// Set worker URL to package assets
PDFJS.GlobalWorkerOptions.workerSrc = '/packages/geekho_pdfjs/build/pdf.worker.js';
// Create PDF
PDFJS.getDocument(url).promise.then(function getPdfHelloWorld(pdf) {
	// Fetch the first page
	pdf.getPage(1).then(function getPageHelloWorld(page) {
		var scale = 1;
		var viewport = page.getViewport({ scale });

		// Prepare canvas using PDF page dimensions
		var canvas = document.getElementById('pdfcanvas');
		var context = canvas.getContext('2d');
		canvas.height = viewport.height;
		canvas.width = viewport.width;

		// Render PDF page into canvas context
		page.render({canvasContext: context, viewport: viewport}).promise.then(function () {
			...
		});
	});
});
```

## Documentation
You can find information about pdf.js lib:
* pdf.js web site: http://mozilla.github.io/pdf.js/
* pdf.js API: https://github.com/mozilla/pdf.js/blob/master/src/display/api.js

## License
MIT
