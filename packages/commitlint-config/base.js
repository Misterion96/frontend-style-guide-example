module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'scope-enum': [2, 'never', []],
        'scope-empty': [1, 'always', 'lower-case'],
        'body-leading-blank': [1, 'always'],
        'body-max-line-length': [2, 'always', 100],
        'footer-leading-blank': [1, 'always'],
        'footer-max-line-length': [2, 'always', 100],
        'header-max-length': [2, 'always', 100],
        'type-enum': [
            2,
            'always',
            [
                'chore', 'docs', 'feat', 'fix',
                'refactor', 'revert', 'test', 'ci',
                'lint', 'style'
            ],
        ],
    },
};
