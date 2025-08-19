import { isHexColor } from "../../validations/isHexColor";

describe("isHexColor", () => {
  it("returns true for valid hex colors", () => {
    expect(isHexColor("#abc")).toBe(true);
    expect(isHexColor("abc")).toBe(true);
    expect(isHexColor("#a1b2c3")).toBe(true);
    expect(isHexColor("a1b2c3")).toBe(true);
    expect(isHexColor("#A1B2C3")).toBe(true);
    expect(isHexColor("   #fff   ")).toBe(true);
  });

  it("returns false for invalid hex colors", () => {
    expect(isHexColor("#12G")).toBe(false);
    expect(isHexColor("xyz")).toBe(false);
    expect(isHexColor("#ab")).toBe(false);
    expect(isHexColor("#12345")).toBe(false);
    expect(isHexColor("12345")).toBe(false);
    expect(isHexColor("#1234567")).toBe(false);
    expect(isHexColor("1234567")).toBe(false);
    expect(isHexColor("#1234g6")).toBe(false);
    expect(isHexColor("1234g6")).toBe(false);
    expect(isHexColor("")).toBe(false);
    expect(isHexColor("   ")).toBe(false);
    expect(isHexColor("blue")).toBe(false);
  });
});
