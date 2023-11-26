module.exports = {
    '*.{js,ts,html}': [
        'eslint --quiet --fix --config ./.eslintrc.js',
    ],
    '*.{json,scss,md}': [
        'prettier --write',
    ],
};
