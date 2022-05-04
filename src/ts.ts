

const module = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:promise/recommended',
    'plugin:etc/recommended',
    'plugin:eslint-comments/recommended',
    'airbnb-base',
    'airbnb-typescript/base',
    'prettier',
  ],
  settings: {
    'import/resolver': {
      typescript: {},
    },
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/test/**/*.ts', '**/*.test.ts', '*.config.ts'],
      },
    ],
    'svelte3/typescript': true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  env: {
    node: true,
    es6: true,
    browser: true,
  },
  overrides: [
    {
      files: ['**/*.spec.ts', '**/*.test.ts'],
      env: {
        jest: true,
      },
    },
  ],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/prefer-default-export': 'off',
    'import/no-mutable-exports': 'off',
    'no-labels': 'off',
    'no-restricted-syntax': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/test/**/*.ts', '**/*.test.ts', '*.config.ts'],
      },
    ],
    'no-use-before-define': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'jsdoc/require-param-type': 'off',
    'jsdoc/require-param': 'off',
    'no-underscore-dangle': 'off'
  },
};

export default module;
