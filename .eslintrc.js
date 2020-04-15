module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
    'jest/globals': true,
  },
  parser: 'babel-eslint',
  extends: [
    'plugin:eslint-plugin/recommended',
    'eslint:recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  parser: 'babel-eslint',
  plugins: ['react', 'eslint-plugin', 'jest'],
  rules: {
    'linebreak-style': 'off',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'react/jsx-filename-extension': 'off',
    'global-require': 'warn',
  },
};
