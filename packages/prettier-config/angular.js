const { overrides, ...commonOptions } = require('./base');
const angular = {
    ...commonOptions,
    $schema: 'https://json.schemastore.org/prettierrc',
    attributeSort: 'ASC',
    attributeGroups: [
        '$ANGULAR_STRUCTURAL_DIRECTIVE',
        '$ANGULAR_ELEMENT_REF',
        '$ID',
        '$DEFAULT',
        '$CLASS',
        '$ANGULAR_ANIMATION',
        '$ANGULAR_ANIMATION_INPUT',
        '$ANGULAR_INPUT',
        '$ANGULAR_TWO_WAY_BINDING',
        '$ANGULAR_OUTPUT',
    ],
    overrides: [
        ...overrides,
        {
            files: [
                '*.component.html',
                '*.template.html',
            ],
            options: {
                parser: 'angular',
                htmlWhitespaceSensitivity: 'ignore',
                bracketSameLine: false,
                singleAttributePerLine: true,
            },
        },
    ],
};

module.exports = angular;
