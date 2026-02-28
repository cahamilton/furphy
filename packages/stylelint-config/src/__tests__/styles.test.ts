/** @format */

import { describe, test, expect } from "vitest";
import { readFile } from "node:fs/promises";
import { globSync } from "node:fs";
import path from "path";
import stylelint from "stylelint";

import config from "../index";

describe("styles", () => {
  const accepted = globSync("**/accept/*.css");
  const rejected = globSync("**/reject/*.css");

  describe("accept", () => {
    accepted.forEach((file) => {
      const filename = path.basename(file);
      const ruleName = file.split("/styles/")[1].split("/accept/")[0];

      if (!ruleName) {
        throw new Error("ruleName not found");
      }

      test(`${ruleName} - ${filename}`, async () => {
        const code = await readFile(file, "utf-8");
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
        const code = await readFile(file, "utf-8");
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
