import { describe, it, expect } from "vitest";
import { maskString } from "../maskstring";

describe("maskString", () => {
  it("should be a function", () => {
    expect(typeof maskString).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => maskString(null as any)).toThrow();
  });
});
