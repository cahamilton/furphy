/** @format */

import { Configuration } from "stylelint";

const config: Partial<Configuration> = {
  processors: ["stylelint-processor-styled-components"],
  extends: [
    "@cahamilton/stylelint-config",
    "stylelint-config-styled-components",
  ],
};

module.exports = config;
