import { describe, it, expect } from "vitest";
import { maskEmail } from "../maskemail";

describe("maskEmail", () => {
  it("should be a function", () => {
    expect(typeof maskEmail).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => maskEmail(null as any)).toThrow();
  });
});
