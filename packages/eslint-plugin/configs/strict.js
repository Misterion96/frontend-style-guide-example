const path = require('node:path');
const ROOT = path.join(__dirname, '..');
const { resolvePluginsConfig } = require('../helpers/resolve-plugins-config');

const tsPlugins = [
  'typescript',
  'rxjs',
  'angular',
];

const htmlPlugins = ['angular-template'];

module.exports = {
  extends: [path.join(__dirname, 'base.js')],
  overrides: [
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      extends: resolvePluginsConfig(tsPlugins, 'strict', ROOT),
    },
    {
      files: ['*.html'],
      extends: resolvePluginsConfig(htmlPlugins, 'strict', ROOT),
    },
  ],
};
