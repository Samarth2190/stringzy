import { functionWordCount } from "../analyzing/functionWordCount";

describe("functionWordCount", () => {
  test("counts function words in a normal sentence", () => {
    expect(functionWordCount("This is a test of the system")).toBe(5);
  });

  test("returns 0 when there are no function words", () => {
    expect(functionWordCount("Elephants run fast")).toBe(0);
  });

  test("ignores case and punctuation", () => {
    expect(functionWordCount("The, THE, the!")).toBe(3);
  });

  test("returns 0 for empty string", () => {
    expect(functionWordCount("")).toBe(0);
  });
});
