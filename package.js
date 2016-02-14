Package.describe({
  name: "wrk961:pdfjs",
  summary: "PDF rendering for your Meteor application (client only)",
  version: "1.3.91",
  git: "https://github.com/wkronmiller/meteor-pdfjs.git"
});

Package.on_use(function (api) {
  api.versionsFrom(['METEOR@0.9.3', 'METEOR@0.9.4', 'METEOR@1.0']);
  api.add_files(['build/pdf.js', 'web/compatibility.js'], 'client');
  api.add_files(['build/pdf.worker.js',
                'web/compatibility.js'], 'client', {isAsset: true});
  api.export('PDFJS'); 
});
