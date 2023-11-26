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
      rules: {
        '@angular-eslint/directive-selector': [
          'error',
          {
            type: 'attribute',
            prefix: 'gApp',
            style: 'camelCase',
          },
        ],
        '@angular-eslint/component-selector': [
          'error',
          {
            type: 'element',
            prefix: 'g-app',
            style: 'kebab-case',
          },
        ],
      },
    },
  ],
};
