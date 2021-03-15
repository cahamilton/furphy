/** @format */

import { Configuration } from "stylelint";

const config: Partial<Configuration> = {
  extends: [
    "@cahamilton/stylelint-config", //
    "stylelint-config-css-modules",
  ],
};

module.exports = config;
