const baseConfig = {
    printWidth: 100,
    tabWidth: 4,
    useTabs: false,
    semi: true,
    singleQuote: true,
    quoteProps: 'as-needed',
    trailingComma: 'all',
    bracketSpacing: true,
    arrowParens: 'avoid',
    requirePragma: false,
    multilineArraysWrapThreshold: 3,
    endOfLine: 'auto',
    embeddedLanguageFormatting: 'auto',
    plugins: [
        require.resolve('prettier-plugin-multiline-arrays'),
    ],
    overrides: [
        {
            files: ['*.html'],
            options: { parser: 'html' },
        },
        {
            files: ['*.js'],
            options: {
                parser: 'babel',
                multilineArraysWrapThreshold: 2,
            },
        },
        {
            files: ['*.json'],
            options: {
                parser: 'json',
                multilineArraysWrapThreshold: 2,
            },
        },
        {
            files: ['*.ts'],
            options: {
                parser: 'typescript',
                multilineArraysWrapThreshold: 3,
                semi: true,
                singleQuote: true,
            },
        },
    ],
};

module.exports = baseConfig;
