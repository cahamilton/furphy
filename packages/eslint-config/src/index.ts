/** @format */

import { Linter } from "eslint";

const rulesJS: Linter.RulesRecord = {
  "import/prefer-default-export": "off",
  "lines-between-class-members": "error",
  "no-alert": "error",
  "no-constant-condition": "error",
  "no-debugger": "error",
  "react/no-danger": "error",
};

const rulesTS: Linter.RulesRecord = {
  ...rulesJS,
  "@typescript-eslint/lines-between-class-members": "error",
  "react/prop-types": "off",
};

const config: Linter.Config = {
  parser: "babel-eslint",
  extends: ["airbnb", "airbnb/hooks", "prettier"],
  rules: rulesJS,
  overrides: [
    {
      files: "*.{ts,tsx}",
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
      parserOptions: {
        project: "tsconfig.json",
        sourceType: "module",
      },
      extends: [
        "airbnb",
        "airbnb/hooks",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "airbnb-typescript",
        "prettier",
        "prettier/@typescript-eslint",
      ],
      rules: rulesTS,
    },
  ],
};

module.exports = config;
