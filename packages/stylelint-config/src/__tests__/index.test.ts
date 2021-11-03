/** @format */

/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { lint } from "stylelint";
import * as configuration from "../index";

describe("configuration", () => {
  const code = `
    a {
      top: 0;
      color: red;
    }
  `;

  it("should not report errors", async () => {
    const { errored } = await lint({
      code,
      config: {
        rules: [],
      },
    });

    expect(errored).toBe(false);
  });

  it("should report errors", async () => {
    const { errored } = await lint({
      code,
      config: configuration,
    });

    expect(errored).toBe(true);
  });
});
