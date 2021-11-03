/** @format */

import fs from "fs/promises";
import globby from "globby";
import path from "path";
import stylelint from "stylelint";

// TODO: Fix up these ignores. @types aren't behaving
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import * as config from "../index";

describe("styles", () => {
  const accepted = globby.sync("**/accept/*.css") as Array<string>;
  const rejected = globby.sync("**/reject/*.css") as Array<string>;

  describe("accept", () => {
    accepted.forEach((file) => {
      const filename = path.basename(file);
      const ruleName = file.split("/styles/")[1].split("/accept/")[0];

      if (!ruleName) {
        throw new Error("ruleName not found");
      }

      test(`${ruleName} - ${filename}`, async () => {
        const code = await fs.readFile(file, "utf-8");
        const { results } = await stylelint.lint({ code, config });
        const { warnings } = results[0];

        expect(warnings).not.toContainEqual(
          expect.objectContaining({ rule: ruleName, severity: "error" })
        );
      });
    });
  });

  describe("reject", () => {
    rejected.forEach((file) => {
      const filename = path.basename(file);
      const ruleName = file.split("/styles/")[1].split("/reject/")[0];

      if (!ruleName) {
        throw new Error("ruleName not found");
      }

      test(`${ruleName} - ${filename}`, async () => {
        const code = await fs.readFile(file, "utf-8");
        const { results } = await stylelint.lint({ code, config });
        const { warnings } = results[0];

        expect(warnings.length).toBeGreaterThan(0);
        expect(warnings).toContainEqual(
          expect.objectContaining({ rule: ruleName, severity: "error" })
        );
      });
    });
  });
});
