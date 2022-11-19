module.exports = {
  env: {
    browser: true,
    es2022: true
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  plugins: ['simple-import-sort', 'react'],
  rules: {
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/no-misused-promises': 'warn',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/no-invalid-void-type': 'warn',
    "@typescript-eslint/no-dynamic-delete": "warn",
    "@typescript-eslint/member-delimiter-style": "warn",
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    "@typescript-eslint/indent": "warn",
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    'comma-dangle': 'off',
    '@typescript-eslint/semi': 'off',
    'react/react-in-jsx-scope': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    '@typescript-eslint/quotes': 'off',
    'multiline-ternary': 'off',
    'eol-last': 'off',
    semi: 'off',
  }
}
