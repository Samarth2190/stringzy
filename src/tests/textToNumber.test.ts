import assert from "assert";
import { textToNumber } from "../textToNumber.js";


assert.strictEqual(textToNumber("five"), 5);
assert.strictEqual(textToNumber("twenty one"), 21);
assert.strictEqual(textToNumber("one hundred"), 100);
assert.strictEqual(textToNumber("five hundred twelve"), 512);
assert.strictEqual(textToNumber("one thousand and twenty five"), 1025);
assert.strictEqual(textToNumber("three million one hundred"), 3000100);

console.log("All textToNumber tests passed!");
