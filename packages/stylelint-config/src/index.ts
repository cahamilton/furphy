/** @format */

/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { Config } from "stylelint";

const config: Config = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-css-modules",
    "stylelint-config-styled-components",
    "stylelint-config-property-sort-order-smacss",
  ],
  overrides: [
    {
      files: ["**/*.js", "**/*.ts", "**/*.jsx", "**/*.tsx"],
      customSyntax: "postcss-jsx",
    },
  ],
};

module.exports = config;
