import test from "node:test";
import assert from "node:assert/strict";
import "../extension";

test("should convert to camelCase", () => {
  const result = "hello world".camelCase();
  assert.equal(result, "helloWorld");
});

test("should capitalize words", () => {
  const result = "hello world".capitalizeWords(); 
  assert.equal(result, "Hello World");
});

test("should chain methods (camelCase + capitalizeWords)", () => {
  const result = "string example".camelCase().capitalizeWords(); 
  assert.equal(result, "StringExample");
});