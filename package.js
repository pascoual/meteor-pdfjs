Package.describe({
  summary: "PDF rendering for your Meteor application (client only)"
});

Package.on_use(function (api) {
  api.add_files(['build/pdf.js',
                 'build/pdf.worker.js',
                 'web/compatibility.js'], 'client');
  api.export && api.export('PDFJS'); 
});