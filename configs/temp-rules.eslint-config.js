module.exports = {
    overrides: [
        {
            files: ['*.ts'],
            rules: {
                '@angular-eslint/no-output-native': 'warn',
                '@typescript-eslint/explicit-member-accessibility': 'warn',
            },
        },
        {
            files: ['*.html'],
            rules: {
                '@angular-eslint/template/no-any': 'warn',
                '@angular-eslint/template/no-call-expression': 'warn',
            },
        },
    ],
};
