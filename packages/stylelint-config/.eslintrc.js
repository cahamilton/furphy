/** @format */

const path = require("path");

module.exports = {
  extends: "@cahamilton/eslint-config",
  parserOptions: {
    project: "tsconfig.eslint.json",
    tsconfigRootDir: __dirname,
  },
  rules: {
    "import/no-extraneous-dependencies": [
      "error",
      {
        packageDir: [
          path.resolve(__dirname),
          path.resolve(__dirname, "../../"),
        ],
      },
    ],
  },
};
