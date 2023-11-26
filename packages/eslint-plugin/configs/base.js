const path = require("node:path");
const { resolvePluginsConfig } = require('../helpers/resolve-plugins-config');

const ROOT = path.join(__dirname, '..');

const commonPlugins = [
    'prettier'
];

module.exports = {
    parserOptions: {
        ecmaVersion: 'latest',
    },
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: resolvePluginsConfig(commonPlugins, 'index', ROOT)
};
