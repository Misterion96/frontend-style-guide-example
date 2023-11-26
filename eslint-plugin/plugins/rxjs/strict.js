module.exports = {
    extends: ['./recommended.js'],
    rules: {
        'rxjs/no-exposed-subjects': 'error',
        'rxjs/finnish': [
            'error',
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
