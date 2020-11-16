module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    // 'airbnb',
    'plugin:prettier/recommended',
    'prettier/react',
    'plugin:jest/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'jest'],
  rules: {
    'prettier/prettier': ['error'],
    'react/react-in-jsx-scope': 0,
  },
  settings: {
    react: {
      version: 'latest',
    },
  },
};
