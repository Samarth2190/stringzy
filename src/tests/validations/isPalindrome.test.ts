import { isPalindrome } from "../../validations/isPalindrome";

describe("isPalindrome", () => {
  it("returns true for simple palindromes", () => {
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("madam")).toBe(true);
  });

  it("returns false for non-palindromes", () => {
    expect(isPalindrome("hello")).toBe(false);
    expect(isPalindrome("world")).toBe(false);
  });

  it("is case-insensitive", () => {
    expect(isPalindrome("RaceCar")).toBe(true);
    expect(isPalindrome("MadAm")).toBe(true);
  });

  it("ignores punctuation and spaces", () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
    expect(isPalindrome("No lemon, no melon!")).toBe(true);
  });

  it("returns true for empty string and single characters", () => {
    expect(isPalindrome("")).toBe(true);
    expect(isPalindrome("x")).toBe(true);
  });

  it("handles strings with only special characters", () => {
    expect(isPalindrome("?!")).toBe(true); // cleans to ''
    expect(isPalindrome("!@#$$#@!")).toBe(true); // also cleans to ''
  });

  it("throws an error if input is not a string", () => {
    expect(() => isPalindrome(123 as any)).toThrow(/Input must be a string/);
    expect(() => isPalindrome(null as any)).toThrow(/Input must be a string/);
    expect(() => isPalindrome(undefined as any)).toThrow(/Input must be a string/);
  });
});
