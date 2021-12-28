/** @format */

import type { Config } from "stylelint";

const config: Config = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-css-modules",
    "stylelint-config-styled-components",
    "stylelint-config-property-sort-order-smacss",
  ],
  overrides: [
    {
      //! Package is soon to be deprecated:
      //! https://github.com/stylelint/postcss-css-in-js/issues/225
      customSyntax: "@stylelint/postcss-css-in-js",
      files: ["**/*.js", "**/*.ts", "**/*.jsx", "**/*.tsx"],
      rules: {
        "no-empty-first-line": null,
        "value-keyword-case": null,
      },
    },
  ],
};

export = config;
