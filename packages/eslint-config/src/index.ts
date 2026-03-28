/** @format */

import eslint from "@eslint/js";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import { defineConfig, globalIgnores } from "eslint/config";
import pluginImport from "eslint-plugin-import";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import pluginTypescript from "typescript-eslint";

const EXTENSIONS_JSX = "**/*.{jsx,tsx}";
const EXTENSIONS_JAVASCRIPT = "**/*.{js,jsx,mjs}";
const EXTENSIONS_TYPESCRIPT = "**/*.{ts,tsx,mts}";

export default defineConfig([
  globalIgnores(["**/*.d.ts", "**/package-lock.json"], "global-ignores"),
  {
    files: [EXTENSIONS_JAVASCRIPT, EXTENSIONS_TYPESCRIPT],
    plugins: { eslint },
    extends: [
      eslint.configs["recommended"],
      pluginImport.flatConfigs["recommended"],
      pluginImport.flatConfigs["typescript"],
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      "curly": ["error", "all"],
      "eqeqeq": ["error", "always"],
      "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
      "import/order": [
        "error",
        {
          "groups": [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
            "type",
            "unknown",
          ],
          "alphabetize": {
            order: "asc",
            caseInsensitive: true,
          },
          "sortTypesGroup": true,
          "newlines-between": "never",
          "newlines-between-types": "never",
          "warnOnUnassignedImports": false,
        },
      ],
      "import/no-cycle": ["error"],
      "import/no-extraneous-dependencies": ["error"],
      "import/no-unresolved": ["off"], // Too many false positives
      "no-alert": ["error"],
      "no-await-in-loop": ["error"],
      "no-else-return": ["error"],
      "no-lonely-if": ["error"],
      "no-nested-ternary": ["error"],
      "no-unneeded-ternary": ["error"],
    },
  },
  {
    files: [EXTENSIONS_TYPESCRIPT],
    extends: [pluginTypescript.configs["strictTypeChecked"]],
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    rules: {
      "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/no-confusing-void-expression": ["off"],
      "@typescript-eslint/restrict-template-expressions": [
        "error",
        {
          allowAny: false,
          allowBoolean: false,
          allowNever: false,
          allowNullish: false,
          allowNumber: true,
          allowRegExp: false,
        },
      ],
    },
  },
  {
    files: [EXTENSIONS_JSX],
    extends: [
      pluginReact.configs.flat["recommended"],
      pluginReact.configs.flat["jsx-runtime"],
      pluginReactHooks.configs.flat["recommended"],
      pluginJsxA11y.flatConfigs["strict"],
    ],
    rules: {
      "react/no-array-index-key": ["error"],
      "react/no-danger": ["error"],
    },
    settings: {
      react: {
        version: "detect",
        defaultVersion: "18",
      },
    },
  },
  {
    files: ["**/*.json"],
    // @ts-ignore: https://github.com/eslint/json/issues/213
    plugins: { json },
    language: "json/json",
    extends: ["json/recommended"],
  },
  {
    files: ["**/*.md"],
    plugins: { markdown },
    language: "markdown/gfm",
    extends: ["markdown/recommended"],
  },
]);
