module.exports = {
  extends: [
    '../../.eslintrc.json',
    'plugin:vue/vue3-essential',
    '@vue/typescript/recommended',
    'prettier',
  ],
  ignorePatterns: ['!**/*'],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  env: {
    node: true,
  },
  overrides: [
    {
      files: ['**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
};
