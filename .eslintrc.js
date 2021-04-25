module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  root: true,
  rules: {
    indent: ['error', 2],
    'eol-last': ['error', 'always'],
    'react/prop-types': 'warn',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
  },
};
