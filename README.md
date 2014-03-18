# pdfjs

PDF rendering for your Meteor application (client only).
This package use the Mozilla's PDF reader built with HTML5 and JavaScript

If you need server side PDF rendering, please use pdf.js Meteor package from Mitar:
https://github.com/peerlibrary/meteor-pdf.js

## Quick Start
1. `npm install -g meteorite` (if not already installed)
2. `mrt add pdfjs`
3. Exemple:

```html
<!-- In your template -->
<canvas id="pdfcanvas"></canvas>
```
```js
/* In your Template.xxx.rendered */
// Set worker URL to package assets
PDFJS.workerSrc = '/packages/pdfjs/build/pdf.worker.js';
// Create PDF
PDFJS.getDocument(url).then(function getPdfHelloWorld(pdf) {
	// Fetch the first page
	pdf.getPage(1).then(function getPageHelloWorld(page) {
		var scale = 1;
		var viewport = page.getViewport(scale);

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
You can find informations about pdf.js lib:
* pdf.js web site: http://mozilla.github.io/pdf.js/
* pdf.js API: https://github.com/mozilla/pdf.js/blob/master/src/display/api.js

## Contributing
Contributors are very welcome. There are many things you can help with,
including adding testing feature, creating examples for the examples folder...
Some guidelines below:

* **Questions**: It's okay to ask a question on Github Issues if you're
  having trouble since the volume is manageable. Just prefix your Github Issue with
  'Question: ' so we can differentiate easily. Also, please make sure you've read through
  pdf.js documentation and tried a few things before asking. This way you can be very
  specific in your question. Also, please provide a cloneable Github repository
  if the issue is complex. For more complex questions sometimes it's hard to get all of the context
  required to solve a problem by just looking at text.

* **New Features** & **Bugs**: You need to ask new features and bugs corrections to PDFjs creator
  on his GIT: http://mozilla.github.io/pdf.js/

* **Answer Questions!**: If you can help another user please do!

## TODO
1. Explain how to make a viewer with selectable text
2. Add testing

## License
MIT