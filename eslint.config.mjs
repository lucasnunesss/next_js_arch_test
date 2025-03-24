import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next'],
    globals: {
      React: 'readonly',
    },
    rules: {
      'no-unused-vars': [1, { args: 'after-used', argsIgnorePattern: '^_' }],
    },
  }),
];

export default eslintConfig;
