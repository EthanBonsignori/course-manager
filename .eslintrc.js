module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  root: true,
  rules: {
    'prettier/prettier': 'error',
    indent: 'off',
    'eol-last': ['error', 'always'],
    'react/prop-types': 'warn',
    'no-unused-vars': 'warn',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
  },
};
