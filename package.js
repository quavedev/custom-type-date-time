Package.describe({
  name: 'quave:custom-type-date-time',
  version: '1.0.0',
  summary: 'DateTime custom type for EJSON compatible with GraphQL and MongoDB',
  git: 'https://github.com/quavedev/custom-type-date-time',
});

Npm.depends({
  'date-fns': '2.12.0',
});

Package.onUse(function(api) {
  api.versionsFrom('1.10.2');
  api.use('ecmascript');

  api.use('quave:collections@0.0.4');

  api.mainModule('DateTime.js');
});
