import { isTypeOf } from "../../validations/isTypeOf";

describe("isTypeOf", () => {
  it("returns true for valid file", () => {
    expect(isTypeOf("photo.PNG", "image")).toBe(true);
  });

  it("returns false for unknown extension", () => {
    expect(isTypeOf("unknown.xyz", "document")).toBe(false);
  });

  it("returns false for unknown type category", () => {
    expect(isTypeOf("photo.png", "media")).toBe(false);
  });

  it("returns false for mismatched type", () => {
    expect(isTypeOf("video.mp4", "document")).toBe(false);
  });

  it("returns false for missing extension", () => {
    expect(isTypeOf("filewithoutextension", "image")).toBe(false);
  });

  it("handles URL with query and hash fragments", () => {
    expect(isTypeOf("https://example.com/pic.jpeg?version=2#section", "image")).toBe(true);
  });
});
