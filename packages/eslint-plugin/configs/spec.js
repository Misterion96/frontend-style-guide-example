const path = require('node:path');
const ROOT = path.join(__dirname, '..');
const { resolvePluginsConfig } = require('../helpers/resolve-plugins-config');

const tsPlugins = [
  'typescript',
  'rxjs',
  'angular',
];

module.exports = {
  extends: [
    path.join(__dirname, 'base.js'),
    ...resolvePluginsConfig(tsPlugins, 'spec', ROOT),
  ],
};
