module.exports = {
  extends: ['expo', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'react/prop-types': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'prettier/prettier': 'off',
    'react-native/no-inline-styles': 'off',
  },
};
