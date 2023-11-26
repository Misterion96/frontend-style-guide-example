module.exports = {
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    '@typescript-eslint/no-dupe-class-members': 'error',
    '@typescript-eslint/no-redeclare': 'error',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/no-throw-literal': 'error',
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    '@typescript-eslint/no-duplicate-enum-values': 'error',
    '@typescript-eslint/no-invalid-void-type': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/no-base-to-string': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-misused-promises': 'error',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/no-useless-empty-export': 'error',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/non-nullable-type-assertion-style': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-ts-expect-error': 'error',
    '@typescript-eslint/unified-signatures': 'error',
    '@typescript-eslint/member-delimiter-style': 'error',

    '@typescript-eslint/require-array-sort-compare': [
      'error',
      { ignoreStringArrays: true },
    ],
    '@typescript-eslint/no-confusing-void-expression': [
      'error',
      { ignoreArrowShorthand: true },
    ],
    '@typescript-eslint/no-explicit-any': [
      'warn',
      { fixToUnknown: false, ignoreRestArgs: true },
    ],
    '@typescript-eslint/typedef': [
      'error',
      {
        memberVariableDeclaration: true,
        variableDeclaration: false,
        parameter: true,
        propertyDeclaration: true,
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'enum',
        format: ['PascalCase'],
        prefix: ['Enum'],
      },
      {
        selector: 'typeLike',
        format: ['StrictPascalCase'],
      },
      {
        selector: 'method',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'property',
        format: ['camelCase', 'UPPER_CASE'],
        leadingUnderscore: 'allowSingleOrDouble',
      },
      {
        selector: 'property',
        format: null,
        modifiers: ['requiresQuotes'],
        leadingUnderscore: 'allowSingleOrDouble',
      },
      {
        selector: 'parameter',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'parameter',
        modifiers: ['destructured'],
        format: null,
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
        filter: {
          regex: '^_',
          match: false,
        },
      },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE'],
      },
      {
        selector: 'interface',
        format: ['PascalCase', 'camelCase'],
        prefix: ['Int'],
        filter: {
          regex: '^On',
          match: false,
        },
      },
      {
        selector: 'typeAlias',
        format: ['PascalCase', 'camelCase'],
        prefix: ['Type'],
      },
      {
        selector: 'class',
        format: ['PascalCase'],
      },
      {
        selector: 'typeProperty',
        format: [
          'PascalCase',
          'strictCamelCase',
          'UPPER_CASE',
        ],
      },
    ],
    '@typescript-eslint/type-annotation-spacing': ['error'],
    '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: {
          memberTypes: [
            'signature',
            'field',
            'decorated-field',
            'decorated-get',
            'decorated-set',
            'constructor',
            'decorated-method',
            'method',
          ],
        },
        typeLiterals: {
          memberTypes: 'never',
          optionalityOrder: 'required-first',
          order: 'natural',
        },
        interfaces: {
          memberTypes: 'never',
          optionalityOrder: 'required-first',
          order: 'natural',
        },
      },
    ],
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          Object: {
            message: 'Avoid using the Object type. Did you mean object?',
          },
          Function: {
            message:
              'Avoid using the Function type. Prefer a specific function type, like () => void.',
          },
          Boolean: {
            message: 'Avoid using the Boolean type. Did you mean boolean?',
          },
          Number: {
            message: 'Avoid using the Number type. Did you mean number?',
          },
          String: {
            message: 'Avoid using the String type. Did you mean string?',
          },
          Symbol: {
            message: 'Avoid using the Symbol type. Did you mean symbol?',
          },
        },
      },
    ],
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/prefer-includes': 'error',

    '@typescript-eslint/promise-function-async': [
      'error',
      {
        allowedPromiseNames: ['Thenable'],
        checkArrowFunctions: true,
        checkFunctionDeclarations: true,
        checkFunctionExpressions: true,
        checkMethodDeclarations: true,
      },
    ],
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'never',
      },
    ],
    '@typescript-eslint/restrict-plus-operands': [
      'error',
      { checkCompoundAssignments: true },
    ],
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-enum-initializers': ['off'],
    '@typescript-eslint/no-implicit-any-catch': ['error'],
    '@typescript-eslint/ban-tslint-comment': ['error'],
    '@typescript-eslint/class-literal-property-style': ['error'],
    '@typescript-eslint/no-extraneous-class': [
      'error',
      {
        allowConstructorOnly: true,
        allowEmpty: false,
        allowStaticOnly: true,
        allowWithDecorator: true,
      },
    ],
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    '@typescript-eslint/prefer-literal-enum-member': 'error',
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',
    '@typescript-eslint/no-dynamic-delete': 'error',
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': true,
        'ts-nocheck': true,
        'ts-check': false,
        minimumDescriptionLength: 3,
      },
    ],
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/triple-slash-reference': 'error',
    '@typescript-eslint/no-implied-eval': 'error',
    '@typescript-eslint/no-loop-func': 'error',
    '@typescript-eslint/return-await': ['error', 'in-try-catch'],
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    '@typescript-eslint/no-unsafe-declaration-merging': 'error',
    '@typescript-eslint/sort-type-constituents': 'error',
    // ---- override eslint rules ----
    // ----  begin ----
    'brace-style': 'off',
    '@typescript-eslint/brace-style': [
      'error',
      '1tbs',
      { allowSingleLine: true },
    ],
    //
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
        enums: 'always-multiline',
        generics: 'always-multiline',
        tuples: 'always-multiline',
      },
    ],
    //
    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': ['error', { before: false, after: true }],
    //
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': ['error', 'never'],
    //
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': [
      'error',
      'all',
      {
        enforceForArrowConditionals: false,
        nestedBinaryExpressions: false,
      },
    ],
    //
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': ['error'],
    //
    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],
    //
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    //
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
      },
    ],
    //
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': [
      'error',
      {
        allowKeywords: true,
        allowPattern: '',
        allowPrivateClassPropertyAccess: false,
        allowProtectedClassPropertyAccess: false,
        allowIndexSignaturePropertyAccess: false,
      },
    ],
    //
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    //
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': ['error'],
    //
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': [
      'warn',
      {
        enforce: [
          { blankLine: 'always', prev: 'method', next: 'method' },
          { blankLine: 'always', prev: 'field', next: 'method' },
        ],
        exceptAfterOverload: true,
        exceptAfterSingleLine: true,
      },
    ],
    //
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': ['warn'],
    //
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': [
      'error',
      {
        allow: [
          'arrowFunctions',
          'functions',
          'methods',
        ],
      },
    ],
    //
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    //
    'require-await': 'off',
    '@typescript-eslint/require-await': 'error',
    // ----- end -----

    // ---- warn ----
    '@typescript-eslint/no-unsafe-argument': 'warn',
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-invalid-this': 'warn',
    '@typescript-eslint/switch-exhaustiveness-check': 'warn',
    '@typescript-eslint/prefer-optional-chain': 'warn',
    'no-console': 'warn',
    '@typescript-eslint/prefer-nullish-coalescing': 'warn',
    '@typescript-eslint/prefer-readonly': 'warn',
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/consistent-type-definitions': 'warn',
    '@typescript-eslint/explicit-member-accessibility': [
      'warn',
      {
        accessibility: 'explicit',
        overrides: {
          accessors: 'explicit',
          constructors: 'no-public',
          methods: 'explicit',
          properties: 'explicit',
          parameterProperties: 'explicit',
        },
        ignoredMethodNames: [
          'ngOnChanges',
          'ngOnInit',
          'ngDoCheck',
          'ngAfterContentInit',
          'ngAfterContentChecked',
          'ngAfterViewInit',
          'ngAfterViewChecked',
          'ngOnDestroy',
          'intercept',
          'transform',
        ],
      },
    ],

    // ---- off ----
    'no-redeclare': 'off',
    'no-throw-literal': 'off',
    'no-useless-constructor': 'off',
    'no-dupe-class-members': 'off',
    'no-extra-boolean-cast': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
  },
};
