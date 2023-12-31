module.exports = {
  plugins: ['@angular-eslint'],
  rules: {
    // for example in topic
    '@angular-eslint/no-output-native': 'warn',

    // others
    '@angular-eslint/no-output-rename': 'off',
    '@angular-eslint/no-input-rename': 'off',
    '@angular-eslint/prefer-output-readonly': 'off',
    '@angular-eslint/use-injectable-provided-in': 'off',
    '@angular-eslint/use-pipe-decorator': 'off',

    '@angular-eslint/relative-url-prefix': 'error',
    '@angular-eslint/sort-ngmodule-metadata-arrays': 'error',
    '@angular-eslint/contextual-decorator': ['error'],
    '@angular-eslint/contextual-lifecycle': ['error'],
    '@angular-eslint/no-conflicting-lifecycle': ['error'],
    '@angular-eslint/no-lifecycle-call': ['error'],
    '@angular-eslint/no-output-on-prefix': ['error'],
    '@angular-eslint/prefer-on-push-component-change-detection': ['error'],
    '@angular-eslint/use-component-selector': ['error'],
    '@angular-eslint/use-lifecycle-interface': ['error'],
    '@angular-eslint/use-pipe-transform-interface': ['error'],
    '@angular-eslint/no-pipe-impure': ['error'],
    '@angular-eslint/no-queries-metadata-property': ['error'],
    '@angular-eslint/component-max-inline-declarations': [
      'error',
      {
        template: 1,
        styles: 0,
        animations: 30,
      },
    ],
  },
};
