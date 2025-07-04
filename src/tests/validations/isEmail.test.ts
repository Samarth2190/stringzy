import { describe, it } from "node:test";
import assert from "node:assert";
import { isEmail } from "../../validations/isEmail";

describe("isEmail", () => {
  it("returns true for basic valid emails", () => {
    assert.strictEqual(isEmail("foo@bar.com"), true);
    assert.strictEqual(isEmail("test@example.org"), true);
    assert.strictEqual(isEmail("very.common@example.com"), true);
    assert.strictEqual(
      isEmail("long.email-address-with-hyphens@and.subdomains.example.com"),
      true
    );
  });

  it("returns true for special characters", () => {
    assert.strictEqual(isEmail("test+tag@example.com"), true);
    assert.strictEqual(isEmail("user.name+tag+sorting@example.com"), true);
    assert.strictEqual(isEmail("test/test@example.com"), true);
  });

  it("returns true for IPv4 address literal", () => {
    assert.strictEqual(isEmail("user@[192.168.1.1]"), true);
  });

  it("returns false for invalid emails", () => {
    assert.strictEqual(isEmail(""), false);
    assert.strictEqual(isEmail("@example.com"), false);
    assert.strictEqual(isEmail("test@"), false);
    assert.strictEqual(isEmail("test"), false);
    assert.strictEqual(isEmail("test@.com"), false);
    assert.strictEqual(isEmail("test..test@example.com"), false);
    assert.strictEqual(isEmail(".test@example.com"), false);
    assert.strictEqual(isEmail("test.@example.com"), false);
  });
});
