import { isSlug } from "../../validations/isSlug";

describe("isSlug", () => {
  it("returns true for valid slug", () => {
    expect(isSlug("foo-bar-baz")).toBe(true);
  });

  it("returns false for string with spaces", () => {
    expect(isSlug("foo bar")).toBe(false);
  });

  it("returns false for empty string", () => {
    expect(isSlug("")).toBe(false);
  });

  it("returns false for non-string input", () => {
    expect(isSlug(123 as any)).toBe(false);
  });
});
