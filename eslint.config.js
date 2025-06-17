/// <reference types="node" />

import tseslint from 'typescript-eslint';
import dotcarmen from './index.js';
import { includeIgnoreFile } from '@eslint/compat';
import path from 'node:path';

export default tseslint.config(
  includeIgnoreFile(path.join(import.meta.dirname, '.gitignore')),
  dotcarmen,

  {
    languageOptions: {
      parserOptions: {
        projectService: true,

        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
);
