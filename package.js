Package.describe({
  summary: "PDF rendering for your Meteor application (client only)"
});

Package.on_use(function (api) {
  api.add_files(['build/pdf.js'], 'client');
  api.add_files(['build/pdf.worker.js',
                 'web/compatibility.js'], 'client', {isAsset: true});
  api.export && api.export('PDFJS'); 
});