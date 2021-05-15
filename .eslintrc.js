module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'import/no-unresolved': 0,
    'no-use-before-define': 0,
    'import/no-extraneous-dependencies': 0,
    'max-len': [2, { code: 110 }],
    'react/jsx-filename-extension': [2, { extensions: ['.jsx', '.tsx'] }],
    'operator-linebreak': 0,
    'no-unused-vars': 0,
    'object-curly-newline': 0,
    'import/prefer-default-export': 0,
    'react/prop-types': 0,
    'import/extensions': 0,
  },
};
