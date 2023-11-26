module.exports = {
    '*.{js,ts,html}': [
        'eslint --quiet --fix --config ./.eslintrc.strict.js',
    ],
    '*.{json,scss,md}': [
        'prettier --write',
    ],
};
