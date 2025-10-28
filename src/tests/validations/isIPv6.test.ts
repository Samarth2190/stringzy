import { describe, it } from 'node:test';
import assert from 'node:assert';
import { isIPv6 } from '../../validations/isIPv6';

describe('isIPv6', () => {
  it('returns true for valid full IPv6 addresses', () => {
    assert.strictEqual(isIPv6('2001:0db8:85a3:0000:0000:8a2e:0370:7334'), true);
    assert.strictEqual(isIPv6('ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff'), true);
    assert.strictEqual(isIPv6('0:0:0:0:0:0:0:1'), true);
    assert.strictEqual(isIPv6('fe80:0000:0000:0000:0202:b3ff:fe1e:8329'), true);
  });

  it('returns true for valid shorthand IPv6 addresses', () => {
    assert.strictEqual(isIPv6('2001:db8:85a3::8a2e:370:7334'), true);
    assert.strictEqual(isIPv6('::1'), true);
    assert.strictEqual(isIPv6('fe80::1'), true);
    assert.strictEqual(isIPv6('::'), true);
  });

  it('returns false for IPv6 addresses with too many groups', () => {
    assert.strictEqual(isIPv6('2001:0db8:85a3:0000:0000:8a2e:0370:7334:1234'), false);
    assert.strictEqual(isIPv6('1:2:3:4:5:6:7:8:9'), false);
  });

  it('returns false for IPv6 addresses with too few groups without shorthand', () => {
    assert.strictEqual(isIPv6('2001:db8:85a3:8a2e:370:7334'), false);
    assert.strictEqual(isIPv6('1:2:3:4:5:6:7'), false);
  });

  it('returns false for invalid use of shorthand (::)', () => {
    assert.strictEqual(isIPv6('2001:db8:::1'), false);
    assert.strictEqual(isIPv6(':::1'), false);
    assert.strictEqual(isIPv6('2001::85a3::7334'), false);
  });

  it('returns false for groups longer than 4 hex digits', () => {
    assert.strictEqual(isIPv6('12345::abcd'), false);
    assert.strictEqual(isIPv6('2001:db8:85a3:00000:0000:8a2e:0370:7334'), false);
  });

  it('returns false for invalid characters', () => {
    assert.strictEqual(isIPv6('2001:db8:85a3:z000:0000:8a2e:0370:7334'), false);
    assert.strictEqual(isIPv6('2001:db8:85a3:0000:0000:8a2e:0370:g334'), false);
    assert.strictEqual(isIPv6('abcd:efgh:ijkl:mnop:qrst:uvwx:yz12:3456'), false);
  });

  it('returns false for special characters and malformed strings', () => {
    assert.strictEqual(isIPv6('2001:db8:85a3:0000:0000:8a2e:0370:7334:'), false);
    assert.strictEqual(isIPv6(':2001:db8:85a3:0000:0000:8a2e:0370:7334'), false);
    assert.strictEqual(isIPv6('2001:db8::85a3::7334'), false);
    assert.strictEqual(isIPv6('2001:db8::85a3:7334:'), false);
  });

  it('returns false for empty strings and edge cases', () => {
    assert.strictEqual(isIPv6(''), false);
    assert.strictEqual(isIPv6(':'), false);
    assert.strictEqual(isIPv6(':::'), false);
    assert.strictEqual(isIPv6('::::'), false);
  });

  it('returns true for uppercase valid IPv6 addresses (case-insensitive)', () => {
    assert.strictEqual(isIPv6('2001:DB8:85A3::8A2E:370:7334'), true);
    assert.strictEqual(isIPv6('FE80::1'), true);
    assert.strictEqual(isIPv6('FFFF:FFFF:FFFF:FFFF:FFFF:FFFF:FFFF:FFFF'), true);
  });

  it('returns false for IPv4-mapped IPv6 (unsupported by this validator)', () => {
    assert.strictEqual(isIPv6('::ffff:192.168.1.1'), false);
    assert.strictEqual(isIPv6('2001:db8::192.168.1.1'), false);
  });
});
