module.exports = {
    extends: ['./recommended.js'],
    rules: {
        '@typescript-eslint/no-invalid-this': 'error',
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/prefer-readonly': 'error',
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': 'error',
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/no-unsafe-argument': 'error',
        '@typescript-eslint/no-unsafe-call': 'error',
        '@typescript-eslint/explicit-member-accessibility': [
            'error',
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
    },
};
