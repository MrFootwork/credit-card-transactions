import { describe, test, expect } from "vitest";

describe("import vue components", () => {
  test("normal imports as expected", async () => {
    const cmp = await import("../components/AmountFilter.vue");
    expect(cmp).toBeDefined();
  });
});
