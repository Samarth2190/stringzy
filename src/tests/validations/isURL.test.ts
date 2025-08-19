import { isURL } from "../../validations/isURL";

describe("isURL", () => {
  it("returns true for valid URLs", () => {
    expect(isURL("https://example.com")).toBe(true);
    expect(isURL("http://localhost:3000")).toBe(true);
  });

  it("returns false for invalid URLs", () => {
    expect(isURL("not a url")).toBe(false);
    expect(isURL("")).toBe(false);
  });
});
