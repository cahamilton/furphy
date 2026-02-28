/** @format */

import type { Config } from "stylelint";

const config: Config = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-standard-scss",
    "stylelint-config-css-modules",
    "stylelint-config-property-sort-order-smacss",
  ],
};

export default config;
