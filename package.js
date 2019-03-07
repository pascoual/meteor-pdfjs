Package.describe({
  name: "geekho:pdfjs",
  summary: "PDF rendering for your Meteor application (client only)",
  version: "2.1.266",
  git: "https://github.com/jan-san/meteor-pdfjs.git"
});

Package.on_use(function (api) {
  api.use('modules');
  api.mainModule('build/pdf.js', 'client', { lazy: true }); 
  api.versionsFrom(['METEOR@0.9.3', 'METEOR@0.9.4', 'METEOR@1.0']);
  api.add_files(['build/pdf.worker.js'], 'client', {isAsset: true});
});
