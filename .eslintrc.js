module.exports = {
    'parser': 'babel-eslint',
    'extends': 'airbnb',
    'plugins': [
        'babel'
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'rules': {
        'array-callback-return': ['off'],
        'arrow-body-style': ['off'],
        'arrow-parens': ['off'],
        'babel/quotes': ['error', 'single'],
        'camelcase': ['off'],
        'comma-dangle': ['off'],
        'comma-spacing': ['error', { 'before': false, 'after': true }],
        'consistent-return': ['off'],
        'default-case': 'off',
        'dot-notation': 'off',
        'eol-last': ['off'],
        'eqeqeq': 'off',
        'func-names': ['off'],
        'guard-for-in': 'off',
        'global-require': ['off'],
        'import/prefer-default-export': ['off'],
        'import/no-extraneous-dependencies': 'off',
        'class-methods-use-this': ['off'],
        'indent': ['error', 4, { 'MemberExpression': 0, 'ignoreComments': true }],
        'import/first': 'off',
        'import/no-named-as-default': 'off',
        'import/no-named-default': 'off',
        'jsx-a11y/anchor-has-content': ['off'],
        'jsx-a11y/img-has-alt': ['off'],
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-quotes': ['error', 'prefer-single'],
        'keyword-spacing': ['error', { 'after': true }],
        'linebreak-style': ['off'],
        'max-len': 'off',
        'new-cap': 'off',
        'no-alert': 'off',
        'no-bitwise': 'off',
        'no-console': 'off',
        'no-class-assign': 'off',
        'no-confusing-arrow': 'off',
        'no-constant-condition': 'off',
        'no-case-declarations': 'off',
        'no-else-return': 'off',
        'no-floating-decimal': 'off',
        'no-multi-assign': 'off',
        'no-nested-ternary': 'off',
        'no-path-concat': 'off',
        'no-param-reassign': 'off',
        'no-plusplus': 'off',
        'no-restricted-syntax': 'off',
        'no-return-assign': 'off',
        'no-self-compare': 'off',
        'no-shadow': 'off',
        'no-undef': 'off',
        'no-underscore-dangle': 'off',
        'no-unused-vars': 'off',
        'no-unreachable': 'off',
        'no-unneeded-ternary': 'off',
        'no-useless-escape': 'off',
        'no-use-before-define': 'off',
        'no-useless-constructor': 'off',
        'no-throw-literal': 'off',
        'no-trailing-spaces': 'off',
        'no-var': ['off'],
        'object-shorthand': 'off',
        'padded-blocks': 'off',
        'prefer-arrow-callback': 'off',
        'prefer-template': 'off',
        'prefer-const': 'off',
        'quote-props': 'off',
        'react/destructuring-assignment': ['off'],
        'react/forbid-prop-types': ['off'],
        'react/jsx-filename-extension': ['off'],
        'react/jsx-space-before-closing': ['off'],
        'react/jsx-indent': ['error', 4, { 'MemberExpression': 0 }],
        'react/jsx-indent-props': ['error', 4],
        'react/no-danger': ['off'],
        'react/no-unescaped-entities': ['off'],
        'react/no-did-mount-set-state': ['off'],
        'react/sort-comp': ['off'],
        'react/self-closing-comp': ['off'],
        'react/prefer-stateless-function': 'off',
        'react/prop-types': 'off',
        'semi': 'off',
        'space-before-function-paren': ['off'],
        'spaced-comment': ['off'],
        'space-in-parens': ['off'],
        'vars-on-top': ['off'],
        'wrap-iife': ['off']
    }
};