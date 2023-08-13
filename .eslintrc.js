module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        jest: true,
    },
    extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier', 'plugin:vitest/recommended'],
    plugins: ['prettier', 'vitest'],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    rules: {
        'prettier/prettier': ['error'],
        'vue/require-default-prop': 0,
        'vue/html-indent': ['error', 4],
        'vue/singleline-html-element-content-newline': 0,
        'vue/component-name-in-template-casing': ['error', 'PascalCase'],
        'linebreak-style': 0,
        'no-console': ['error'],
        'vue/no-v-model-argument': 'off',
        'no-unused-vars': ['error', { args: 'none' }],
        'vue/multi-word-component-names': 0,
        'vitest/max-nested-describe': [
            'error',
            {
                max: 3,
            },
        ],
    },
    globals: {
        _: true,
    },
};
