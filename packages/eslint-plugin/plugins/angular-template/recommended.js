module.exports = {
  parser: '@angular-eslint/template-parser',
  plugins: ['@angular-eslint/template'],
  rules: {
    '@angular-eslint/template/alt-text': 'error',
    '@angular-eslint/template/no-positive-tabindex': 'error',
    '@angular-eslint/template/valid-aria': 'error',
    '@angular-eslint/template/no-distracting-elements': 'error',
    '@angular-eslint/template/no-negated-async': 'error',
    '@angular-eslint/template/no-duplicate-attributes': 'error',
    '@angular-eslint/template/elements-content': 'error',
    '@angular-eslint/template/table-scope': 'error',
    '@angular-eslint/template/conditional-complexity': ['error', { maxComplexity: 2 }],
    '@angular-eslint/template/role-has-required-aria': 'error',
    '@angular-eslint/template/no-inline-styles': 'error',

    '@angular-eslint/template/use-track-by-function': 'warn',
    '@angular-eslint/template/no-autofocus': 'warn',
    '@angular-eslint/template/cyclomatic-complexity': [
      'warn',
      {
        maxComplexity: 5,
      },
    ],

    // for example in topic,
    '@angular-eslint/template/no-any': 'warn',
    '@angular-eslint/template/no-call-expression': [
      'warn',
      {
        allowList: ['^cache'],
      },
  ],
  },
};
