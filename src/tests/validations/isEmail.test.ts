import { describe, it } from "node:test";
import assert from "node:assert";
import { isEmail } from "../../validations/isEmail";

describe("isEmail", () => {
  //
  // ✅ Basic valid emails
  //
  it("returns true for basic valid emails", () => {
    assert.strictEqual(isEmail("foo@bar.com"), true);
    assert.strictEqual(isEmail("test@example.org"), true);
    assert.strictEqual(isEmail("very.common@example.com"), true);
    assert.strictEqual(
      isEmail("long.email-address-with-hyphens@and.subdomains.example.com"),
      true
    );
  });

  //
  // ✅ Special characters in local-part
  //
  it("returns true for special characters", () => {
    assert.strictEqual(isEmail("test+tag@example.com"), true);
    assert.strictEqual(isEmail("user.name+tag+sorting@example.com"), true);
    assert.strictEqual(isEmail("test/test@example.com"), true);
  });

  //
  // ✅ IPv4 address literal
  //
  it("returns true for IPv4 address literal", () => {
    assert.strictEqual(isEmail("user@[192.168.1.1]"), true);
  });

  //
  // ✅ Quoted local-parts (RFC 5322)
  //
  it("returns true for quoted local-parts", () => {
    assert.strictEqual(isEmail('"much.more unusual"@example.com'), true);
    assert.strictEqual(isEmail('"very.unusual.@.unusual.com"@example.com'), true);
    assert.strictEqual(
      isEmail('"very.(),:;<>[]".VERY."very@\\ "very".unusual"@strange.example.com'),
      true
    );
  });

  //
  // ✅ IPv6 domain literal
  //
  it("returns true for IPv6 domain literals", () => {
    assert.strictEqual(isEmail("user@[IPv6:2001:db8::1]"), true);
  });

  //
  // ❌ Invalid emails
  //
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

  //
  // ❌ Invalid quoted emails
  //
  it("returns false for invalid quoted local-parts", () => {
    assert.strictEqual(isEmail('"unclosed-quote@example.com'), false);
    assert.strictEqual(isEmail('"missing"quotes@@example.com'), false);
  });
});
