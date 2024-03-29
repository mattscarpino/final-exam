module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: 'airbnb-base',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'prefer-template': 'off',
    'no-await-in-loop': 'off',
    'no-plusplus': 'off',
    'prefer-destructuring': 'off',
    'no-param-reassign': 'off',
    'no-restricted-syntax': 'off',
  },
};
