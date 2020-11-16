module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
    'plugin:jest/recommended',
  ],
  plugins: ['@typescript-eslint', 'react', 'prettier', 'jest'],
  settings: {
    react: {
      version: 'latest',
    },
  },
};
