module.exports = {
  extends: ['./recommended.js'],
  rules: {
    '@angular-eslint/template/use-track-by-function': 'error',
    '@angular-eslint/template/no-call-expression': [
      'error',
      {
        allowList: ['^cache'],
      },
    ],
    '@angular-eslint/template/no-any': 'error',
    '@angular-eslint/template/no-autofocus': 'error',
    '@angular-eslint/template/cyclomatic-complexity': [
      'error',
      {
        maxComplexity: 5,
      },
    ],
  },
};
