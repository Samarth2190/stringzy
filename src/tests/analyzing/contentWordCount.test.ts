import test from "node:test";
import assert from "node:assert/strict";
import { contentWordCount } from "../../analyzing/contentWordCount.js";

test("counts content words in a normal sentence", () => {
  assert.equal(contentWordCount("This is a test of the system"), 2);
});

test("returns 0 when there are no content words", () => {
  assert.equal(contentWordCount("is the at of"), 0);
});

test("ignores case and punctuation", () => {
  assert.equal(contentWordCount("Elephants, ELEPHANTS, elephants!"), 3);
});

test("returns 0 for empty string", () => {
  assert.equal(contentWordCount(""), 0);
});
