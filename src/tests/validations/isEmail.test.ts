import { isEmail } from "../../validations/isEmail";

describe("isEmail", () => {
  it("returns true for basic valid emails", () => {
    expect(isEmail("foo@bar.com")).toBe(true);
    expect(isEmail("test@example.org")).toBe(true);
    expect(isEmail("very.common@example.com")).toBe(true);
    expect(
      isEmail("long.email-address-with-hyphens@and.subdomains.example.com")
    ).toBe(true);
  });

  it("returns true for special characters", () => {
    expect(isEmail("test+tag@example.com")).toBe(true);
    expect(isEmail("user.name+tag+sorting@example.com")).toBe(true);
    expect(isEmail("test/test@example.com")).toBe(true);
  });

  it("returns true for IPv4 address literal", () => {
    expect(isEmail("user@[192.168.1.1]")).toBe(true);
  });

  it("returns false for invalid emails", () => {
    expect(isEmail("")).toBe(false);
    expect(isEmail("@example.com")).toBe(false);
    expect(isEmail("test@")).toBe(false);
    expect(isEmail("test")).toBe(false);
    expect(isEmail("test@.com")).toBe(false);
    expect(isEmail("test..test@example.com")).toBe(false);
    expect(isEmail(".test@example.com")).toBe(false);
    expect(isEmail("test.@example.com")).toBe(false);
  });
});
