module.exports = {
    plugins: ['rxjs'],
    rules: {
        "rxjs/no-async-subscribe": "error",
        "rxjs/no-create": "error",
        "rxjs/no-ignored-notifier": "error",
        "rxjs/no-ignored-replay-buffer": "error",
        "rxjs/no-ignored-takewhile-value": "error",
        "rxjs/no-implicit-any-catch": "error",
        "rxjs/no-index": "error",
        "rxjs/no-internal": "error",
        "rxjs/no-nested-subscribe": "error",
        "rxjs/no-redundant-notify": "error",
        "rxjs/no-sharereplay": ["error", { allowConfig: true }],
        "rxjs/no-subject-unsubscribe": "error",
        "rxjs/no-unbound-methods": "error",
        "rxjs/no-unsafe-subject-next": "error",
        "rxjs/no-unsafe-takeuntil": "error",
        'rxjs/no-topromise': 'error',
        'rxjs/throw-error': 'error',
        'rxjs/no-ignored-observable': 'error',
        // warn
        'rxjs/no-exposed-subjects': 'warn',
        'rxjs/finnish': [
            'warn',
            {
                functions: false,
                methods: false,
                names: {
                    '^(canActivate|canActivateChild|canDeactivate|canLoad|intercept|resolve|validate)$': false,
                },
                parameters: true,
                properties: true,
                strict: false,
                types: {
                    '^EventEmitter$': false,
                },
                variables: true,
            },
        ],
    },
};
