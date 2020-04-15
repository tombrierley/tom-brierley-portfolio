module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'airbnb',
  ],
  plugins: ['react','@typescript-eslint','jsx-a11y', 'prettier'],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  rules: {
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
  },
  globals: {
    React: 'writable',
  },
};
