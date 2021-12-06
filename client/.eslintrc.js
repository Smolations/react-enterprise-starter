module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:import/recommended',
    'plugin:import/typescript',
    'airbnb',
    'plugin:react/recommended',
    'plugin:jest-dom/recommended',
    'plugin:testing-library/react',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    '@babel',
    'import',
    'jest',
    'jest-dom',
    'jsx-a11y',
    'react',
    'react-hooks',
    'testing-library',
    '@typescript-eslint',
  ],
  rules: {
    // turning off default no-unused-expressions and using babel's so
    // our optional chaining usage isn't flagged (e.g. `onClick?.()`)
    'no-unused-expressions': 'off',
    '@babel/no-unused-expressions': ['warn', {
      allowShortCircuit: true,
      allowTernary: true,
    }],
    'jsx-quotes': ['error', 'prefer-double'],
    'max-len': ['error', {
      code: 120,
    }],
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
    'no-plusplus': 'off',
    'no-restricted-syntax': ['off', 'ForOfExpression'],
    'object-curly-newline': ['error', {
      multiline: true,
      minProperties: 3,
      consistent: true,
    }],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
      optionalDependencies: false,
      peerDependencies: false,
    }],
    'react/default-props-match-prop-types': [2, {
      allowRequiredDefaults: true,
    }],
    'react/jsx-handler-names': ['error', {
      eventHandlerPrefix: '(handle|args.on)', // support storybook
      eventHandlerPropPrefix: 'on',
    }],
    'react/jsx-indent': [2, 2, {
      checkAttributes: true,
      indentLogicalExpressions: true,
    }],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-max-props-per-line': [2, { // 0 = off, 1 = warn, 2 = error
      when: 'multiline',
    }],
    'react/jsx-pascal-case': [2],
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-sort-default-props': [2], // 0 = off, 1 = warn, 2 = error; i wish callbacksLast were an option!
    'react/jsx-tag-spacing': [2, { // 0 = off, 1 = warn, 2 = error
      beforeClosing: 'never',
    }],
    'react/jsx-wrap-multilines': [2, { // 0 = off, 1 = warn, 2 = error
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line',
    }],
    'react/function-component-definition': [2, {
      unnamedComponents: 'function-expression',
    }],
    'react/no-unescaped-entities': 'error',
    'react/no-unused-prop-types': [2], // 0 = off, 1 = warn, 2 = error
    'react/sort-prop-types': [2, { // 0 = off, 1 = warn, 2 = error
      callbacksLast: true,
      sortShapeProp: true,
    }],
    'react-hooks/rules-of-hooks': 'error',
  },
  settings: {
    // 'import/resolver': {
    //   node: {},
    //   webpack: {
    //     config: 'webpack.config.js',
    //   },
    // },
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      // 'Hyperlink',
      {'name': 'Link', 'linkAttribute': 'to'},
    ],
  },
  overrides: [
    /** component module files override */
    {
      files: ['**/index.js'],
      rules: {
        'import/prefer-default-export': 'off',
      },
    },
    /* test files override */
    {
      files: [
        '*.conf.js',
        '*.config.js',
        '*.jest.js',
      ],
      env: {
        jest: true,
        mocha: true,
        node: true,
      },
      rules: {
        // a bit confusing as the error is thrown if option is `false`
        'prefer-arrow-callback': 'off',
        'func-names': 'off',
        'react/prop-types': 'off',
      },
    },
  ],
};
