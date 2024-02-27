module.exports = {
    '*.{js,ts,html}': [
        'eslint --fix --config ./.eslintrc.js',
    ],
    '*.{json,scss,md}': [
        'prettier --write',
    ],
};
