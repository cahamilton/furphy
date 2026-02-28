/** @format */

import { describe, it, expect } from "vitest";
import stylelint from "stylelint";
import configuration from "../index";

describe("configuration", () => {
  const code = `
    a {
      color: red;
      top: 0;
    }
  `;

  it("should not report errors", async () => {
    const { errored } = await stylelint.lint({
      code,
      config: {
        rules: [],
      },
    });

    expect(errored).toBe(false);
  });

  it("should report errors", async () => {
    const { errored } = await stylelint.lint({
      code,
      config: configuration,
    });

    expect(errored).toBe(true);
  });
});
