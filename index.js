// @ts-check

import css from '@eslint/css';
import js from '@eslint/js';
import jsonc from 'eslint-plugin-jsonc';
import jsonSchemaValidator from 'eslint-plugin-json-schema-validator';
import markdown from '@eslint/markdown';
import astro from 'eslint-plugin-astro';
import prettierPlugin from 'eslint-plugin-prettier';
import prettier from 'eslint-plugin-prettier/recommended';
import tseslint from 'typescript-eslint';
import tsParser from '@typescript-eslint/parser';

export default tseslint.config(
  {
    plugins: {
      '@astro': astro,
      '@css': css,
      '@js': js,
      '@jsonc': jsonc,
      '@json-schema-validator': jsonSchemaValidator,
      '@md': markdown,
      '@typescript-eslint': tseslint.plugin,
      '@prettier': prettierPlugin,
    },
  },

  {
    name: '@dotcarmen/astro',
    // TODO: why ignores and not files???
    // files: ['**/*.astro', '**/*.astro/**/*'],
    ignores: ['**/*.{css,json,jsonc,json5,md}'],
    extends: [
      astro.configs.recommended,
      {
        name: '@dotcarmen/astro-parser',
        files: ['**/*.astro', '**/*.astro/**/*'],
        languageOptions: {
          parserOptions: {
            parser: tsParser,
          },
        },
      },
    ],
  },

  {
    name: '@dotcarmen/css',
    files: ['**/*.css'],
    extends: [css.configs.recommended],
    language: '@css/css',
    rules: {
      'css/use-baseline': 'warn',
    },
  },

  {
    name: '@dotcarmen/javascript',
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    ignores: ['**/*.astro/*'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommendedTypeChecked,
      tseslint.configs.stylisticTypeChecked,
    ],
  },

  {
    name: '@dotcarmen/json',
    files: ['**/*.json'],
    ignores: ['.{vscode,zed}/**/*', '{j,t}sconfig.json', '{j,t}sconfig.*.json'],
    extends: [
      jsonc.configs['flat/recommended-with-json'],
      jsonSchemaValidator.configs['flat/recommended'],
      jsonc.configs['flat/prettier'],
    ],
  },

  {
    name: '@dotcarmen/jsonc',
    files: [
      '**/*.jsonc',
      '.{vscode,zed}/**/*',
      '{j,t}sconfig.json',
      '{j,t}sconfig.*.json',
    ],
    extends: [
      jsonc.configs['flat/recommended-with-jsonc'],
      jsonSchemaValidator.configs['flat/recommended'],
      jsonc.configs['flat/prettier'],
    ],
    // languageOptions: {
    //   // @ts-expect-error tseslint for some reason is very strict about
    //   // typing for languageOptions
    //   allowTrailingCommas: true,
    // },
  },

  {
    name: '@dotcarmen/json5',
    files: ['**/*.json5'],
    extends: [
      jsonc.configs['flat/recommended-with-json5'],
      jsonSchemaValidator.configs['flat/recommended'],
      jsonc.configs['flat/prettier'],
    ],
  },

  {
    name: '@dotcarmen/markdown',
    files: ['**/*.md'],
    language: '@md/gfm',
    extends: [markdown.configs.recommended],
  },

  prettier,
);
