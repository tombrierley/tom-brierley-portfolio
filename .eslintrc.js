module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: ['airbnb-typescript'],

  plugins: ['react', '@typescript-eslint', 'jsx-a11y', 'prettier'],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    project: './tsconfig.json',
  },
  globals: {
    React: 'writable',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
        'react/prop-types': 'off',
      },
    },
  ],
  rules: {
    'react/jsx-props-no-spreading': ['off'],
  },
};
