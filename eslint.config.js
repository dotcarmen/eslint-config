import { defineConfig } from 'eslint/config';

import js from '@eslint/js';
import json from '@eslint/json';
import ts from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier';

export default defineConfig(
  {
    name: 'js and ts',
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: { js, ts },
    extends: ["js/recommended", "ts/recommendedTypeChecked", "ts/stylisticTypeChecked"],
  },

  {
    name: 'json',
    files: ['**/*.json'],
    ignores: ['.{vscode,zed}/**/*', 'tsconfig.json', 'tsconfig.*.json'],
    plugins: { json },
    extends: ['json/recommended'],
  },

  prettier,
);
