Package.describe({
  summary: "Nicely formatted dropdown list of timezones, based on moment. Also timezone detection.",
  version: '0.0.1',
  name: "quave:blaze-timezone-picker",
});

Npm.depends({
  'moment': '2.29.1',
  'moment-timezone': '0.5.34'
});

Package.onUse(function(api, where) {
  api.versionsFrom("METEOR@2.5");

  api.use(['blaze', 'templating', 'ecmascript'], 'client');
  api.use(['underscore'], 'client');

  api.addFiles([
    'mapping.js',
    'picker.html',
    'picker.js',
    'jstz.js'
  ], 'client');

  api.export(['TimezonePicker']);
});


