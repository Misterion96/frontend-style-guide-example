/**
 * @type {import('@dolgikh-maks/eslint-summary').IConfig}
 */
module.exports = {
    extensions: [
        'ts',
        'html',
        'spec.ts',
    ],
    ignorePlugins: [
        'eslint-plugin-vue',
        'eslint-plugin-react',
        'eslint-plugin-flowtype',
    ],
    configs: [
        './configs/base.js',
        './configs/recommended.js',
        './configs/spec.js',
        './configs/strict.js',
        './plugins/rxjs/recommended.js',
        './plugins/prettier/index.js',
        // other paths
    ],
    output: './docs',
};
