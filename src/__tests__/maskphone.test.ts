import { describe, it, expect } from "vitest";
import { maskPhone } from "../maskphone";

describe("maskPhone", () => {
  it("should be a function", () => {
    expect(typeof maskPhone).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => maskPhone(null as any)).toThrow();
  });
});
