module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react-hooks/recommended',
  ],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: [
          '.js',
          '.jsx',
        ],
      },
    ],
    // 'jsx-a11y/anchor-is-valid': 0,
    // 'jsx-a11y/anchor-has-content': 0,
    // 'react/jsx-props-no-spreading': 0,
    // "react/display-name": 0,
    'react/prop-types': 0,
    // "indent": "off",
    indent: [
      'error',
      2,
      {
        ignoredNodes: [
          'TemplateLiteral',
        ],
      },
    ],
    'template-curly-spacing': 0,
  },
  plugins: [],
};
