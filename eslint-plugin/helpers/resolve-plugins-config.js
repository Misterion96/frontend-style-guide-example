const path = require('path');

function resolvePluginPath(pluginName, relativePath = __dirname) {
  return path.resolve(relativePath, path.join('plugins', pluginName));
}

function resolveConfig(pluginName, configName, relativePath) {
  const pluginPath = resolvePluginPath(pluginName, relativePath);

  try {
    return require.resolve(`${pluginPath}/${configName}.js`);
  } catch (e) {
    console.warn(`Not found config "${configName}" for plugin "${pluginName}"`);
    return '';
  }
}

function resolvePluginsConfig(plugins, configName, relativePath) {
  return plugins
    .map(pluginName => resolveConfig(pluginName, configName, relativePath))
    .filter(config => Boolean(config));
}

module.exports = {
  resolvePluginsConfig,
};
