import { contentWordCount } from "../analyzing/contentWordCount";

describe("contentWordCount", () => {
  test("counts only content words in a sentence", () => {
    expect(contentWordCount("This is a test of the system")).toBe(2);
    // "This" and "test" are content words
  });

  test("counts all words when no function words are present", () => {
    expect(contentWordCount("Elephants run fast")).toBe(3);
  });

  test("ignores case and punctuation", () => {
    expect(contentWordCount("Beautiful, BEAUTIFUL, beautiful!")).toBe(3);
  });

  test("returns 0 for empty string", () => {
    expect(contentWordCount("")).toBe(0);
  });
});
