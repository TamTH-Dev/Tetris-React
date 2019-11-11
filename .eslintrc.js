module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "no-console": "off",
    "no-param-reassign": [2, { "props": false }],
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "object-curly-newline": ["error", { "multiline": true }],
    "object-curly-spacing": ["error", "always"],
    "quotes": ["error", "single", { "allowTemplateLiterals": true }],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
  },
};
