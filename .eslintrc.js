const isCI = process.env.CI;
const offRules = isCI ? { 'prettier/prettier': 'off' } : {};

module.exports = {
    root: true,
    plugins: ['@my-team'],
    extends: ['plugin:@my-team/recommended'],
    rules: {
        ...offRules,
    },
    overrides: [
        {
            files: ['*.ts'],
            parserOptions: {
                project: ['tsconfig.json'],
                tsconfigRootDir: __dirname,
                createDefaultProgram: true,
            },
        },
    ],
};
