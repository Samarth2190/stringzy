import { describe, it } from 'node:test';
import assert from 'node:assert';
import { isIPv4 } from '../../validations/isIPv4';

describe('isIPv4', () => {
  it('returns true for valid IPv4 addresses', () => {
    assert.strictEqual(isIPv4('192.168.1.1'), true);
    assert.strictEqual(isIPv4('0.0.0.0'), true);
  });

  it('returns false for invalid IPv4 addresses with out-of-range numbers', () => {
    assert.strictEqual(isIPv4('256.1.1.1'), false);
    assert.strictEqual(isIPv4('1.256.1.1'), false);
    assert.strictEqual(isIPv4('-1.0.0.1'), false);
  });

  it('returns false for invalid IPv4 addresses with wrong number of parts', () => {
    assert.strictEqual(isIPv4('192.168.1'), false);
    assert.strictEqual(isIPv4('192'), false);
    assert.strictEqual(isIPv4('192.168'), false);
    assert.strictEqual(isIPv4(''), false);
  });

  it('returns false for IPv4 addresses with leading zeros', () => {
    assert.strictEqual(isIPv4('192.168.01.1'), false);
    assert.strictEqual(isIPv4('01.168.1.1'), false);
    assert.strictEqual(isIPv4('192.168.1.001'), false);
    assert.strictEqual(isIPv4('000.0.0.1'), false);
  });

  it('returns false for non-numeric parts', () => {
    assert.strictEqual(isIPv4('192.168.1.a'), false);
    assert.strictEqual(isIPv4('abc.168.1.1'), false);
  });

  it('returns false for IPv4 addresses with special characters', () => {
    assert.strictEqual(isIPv4('192.168.1.1.'), false);
    assert.strictEqual(isIPv4('.192.168.1.1'), false);
    assert.strictEqual(isIPv4('192..168.1.1'), false);
    assert.strictEqual(isIPv4('192.168.1.1/24'), false);
  });

  it('returns false for empty strings and edge cases', () => {
    assert.strictEqual(isIPv4(''), false);
    assert.strictEqual(isIPv4('...'), false);
    assert.strictEqual(isIPv4('192.168..1'), false);
    assert.strictEqual(isIPv4('192.168.1.'), false);
    assert.strictEqual(isIPv4('.192.168.1'), false);
  });

  it('returns false for decimal numbers', () => {
    assert.strictEqual(isIPv4('192.168.1.1.5'), false);
    assert.strictEqual(isIPv4('192.168.1.5.0'), false);
    assert.strictEqual(isIPv4('1.2.3.4.5'), false);
  });

  it('returns false for hexadecimal and other number formats', () => {
    assert.strictEqual(isIPv4('0x192.168.1.1'), false);
    assert.strictEqual(isIPv4('192.0x168.1.1'), false);
    assert.strictEqual(isIPv4('192.168.0x1.1'), false);
    assert.strictEqual(isIPv4('192.168.1.0x1'), false);
  });
});
