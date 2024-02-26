module.exports = {
    '*.{js,ts,html}': [
        'eslint --fix --config ./.eslintrc.adapted.js',
    ],
    '*.{json,scss,md}': [
        'prettier --write',
    ],
};
