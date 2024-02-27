module.exports = {
    root: true,
    plugins: ['@my-team'],
    extends: ['plugin:@my-team/strict'],
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
