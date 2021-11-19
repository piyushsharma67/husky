module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  root:true,
  extends: [
    'plugin:react/recommended',
    "plugin:@typescript-eslint/recommended",
    'airbnb',
    'prettier'
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
    'react',
    '@typescript-eslint',
    'prettier'
  ],
  rules: {
    'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
    "no-use-before-define":0,
    "prettier/prettier": ["error"]
  },
};
