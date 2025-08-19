import { isIPv4 } from "../../validations/isIPv4";

describe("isIPv4", () => {
  it("returns true for valid IPv4 addresses", () => {
    expect(isIPv4("192.168.1.1")).toBe(true);
    expect(isIPv4("0.0.0.0")).toBe(true);
  });

  it("returns false for invalid IPv4 addresses with out-of-range numbers", () => {
    expect(isIPv4("256.1.1.1")).toBe(false);
    expect(isIPv4("1.256.1.1")).toBe(false);
    expect(isIPv4("-1.0.0.1")).toBe(false);
  });

  it("returns false for invalid IPv4 addresses with wrong number of parts", () => {
    expect(isIPv4("192.168.1")).toBe(false);
    expect(isIPv4("192")).toBe(false);
    expect(isIPv4("192.168")).toBe(false);
    expect(isIPv4("")).toBe(false);
  });

  it("returns false for IPv4 addresses with leading zeros", () => {
    expect(isIPv4("192.168.01.1")).toBe(false);
    expect(isIPv4("01.168.1.1")).toBe(false);
    expect(isIPv4("192.168.1.001")).toBe(false);
    expect(isIPv4("000.0.0.1")).toBe(false);
  });

  it("returns false for non-numeric parts", () => {
    expect(isIPv4("192.168.1.a")).toBe(false);
    expect(isIPv4("abc.168.1.1")).toBe(false);
  });

  it("returns false for IPv4 addresses with special characters", () => {
    expect(isIPv4("192.168.1.1.")).toBe(false);
    expect(isIPv4(".192.168.1.1")).toBe(false);
    expect(isIPv4("192..168.1.1")).toBe(false);
    expect(isIPv4("192.168.1.1/24")).toBe(false);
  });

  it("returns false for empty strings and edge cases", () => {
    expect(isIPv4("")).toBe(false);
    expect(isIPv4("...")).toBe(false);
    expect(isIPv4("192.168..1")).toBe(false);
    expect(isIPv4("192.168.1.")).toBe(false);
    expect(isIPv4(".192.168.1")).toBe(false);
  });

  it("returns false for decimal numbers", () => {
    expect(isIPv4("192.168.1.1.5")).toBe(false);
    expect(isIPv4("192.168.1.5.0")).toBe(false);
    expect(isIPv4("1.2.3.4.5")).toBe(false);
  });

  it("returns false for hexadecimal and other number formats", () => {
    expect(isIPv4("0x192.168.1.1")).toBe(false);
    expect(isIPv4("192.0x168.1.1")).toBe(false);
    expect(isIPv4("192.168.0x1.1")).toBe(false);
    expect(isIPv4("192.168.1.0x1")).toBe(false);
  });
});
