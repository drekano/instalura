module.exports = {
  env: {
    browser: true,
    es2021: true,
    'cypress/globals': true,
    'jest/globals': true,
  },
  extends: [
    'plugin:cypress/recommended',
    'plugin:react/recommended',
    'airbnb',
    'plugin:@next/next/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'off',
    '@next/next/no-img-element': 'off',
    '@next/next/no-page-custom-font': 'off',
  },
  overrides: [
    {
      files: [
        '**/*.test.js',
      ],
      plugins: ['jest'],
      env: {
        jest: true,
      },
      // eslint-disable-next-line global-require, import/no-extraneous-dependencies
      ...require('eslint-plugin-jest').configs.recommended,
    },
  ],
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  }
};
