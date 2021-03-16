/** @format */

import { Configuration } from "stylelint";

const config: Partial<Configuration> = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-css-modules",
    "stylelint-config-styled-components",
    "stylelint-config-property-sort-order-smacss",
  ],
};

module.exports = config;
