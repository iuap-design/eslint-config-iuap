module.exports = {
  extends: [
    'eslint-config-airbnb',
    './rules/es6',
    './rules/base',
  ].map(require.resolve),
  rules: {
    strict: 'error',
  },
};