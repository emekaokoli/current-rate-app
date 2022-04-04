module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'airbnb/hooks'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    requireConfigFile: false,
    sourceType: 'module',
  },
  plugins: ['react-hooks'],
  rules: {
    'react/jsx-filename-extension': [0],
    'import/extensions': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'jsx-quotes': ['error', 'prefer-single'],
    'no-console': 1,
    'no-unused-vars': 'warn',
    'no-undef': 1,
    'object-curly-newline': 'off',
  },
};
