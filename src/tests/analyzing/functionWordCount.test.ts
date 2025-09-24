import test from "node:test";
import assert from "node:assert/strict";
import { functionWordCount } from "../../analyzing/functionWordCount.js";

test("counts function words in a normal sentence", () => {
  assert.equal(functionWordCount("This is a test of the system"), 5);
});

test("returns 0 when there are no function words", () => {
  assert.equal(functionWordCount("Elephants run fast"), 0);
});

test("ignores case and punctuation", () => {
  assert.equal(functionWordCount("The, THE, the!"), 3);
});

test("returns 0 for empty string", () => {
  assert.equal(functionWordCount(""), 0);
});
