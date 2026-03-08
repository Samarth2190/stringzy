import { describe, it } from 'node:test';
import assert from 'node:assert';
import { formatToDecimal } from '../../formatting/decimal';

describe('formatToDecimal', () => {
  // Binary
  it('converts binary strings (base 2) without prefix', () => {
    assert.strictEqual(formatToDecimal('1010', { base: 2 }), 10);
    assert.strictEqual(formatToDecimal('0', { base: 2 }), 0);
    assert.strictEqual(formatToDecimal('000101', { base: 2 }), 5);
  });

  it('converts binary strings (base 2) with 0b prefix', () => {
    assert.strictEqual(formatToDecimal('0b1010', { base: 2 }), 10);
    assert.strictEqual(formatToDecimal('0B111', { base: 2 }), 7);
  });

  // Octal
  it('converts octal strings (base 8) without prefix', () => {
    assert.strictEqual(formatToDecimal('12', { base: 8 }), 10);
    assert.strictEqual(formatToDecimal('00012', { base: 8 }), 10);
  });

  it('converts octal strings (base 8) with 0o prefix', () => {
    assert.strictEqual(formatToDecimal('0o12', { base: 8 }), 10);
    assert.strictEqual(formatToDecimal('0O377', { base: 8 }), 255);
  });

  // Hexadecimal
  it('converts hexadecimal strings (base 16) without prefix (uppercase/lowercase)', () => {
    assert.strictEqual(formatToDecimal('ff', { base: 16 }), 255);
    assert.strictEqual(formatToDecimal('FF', { base: 16 }), 255);
    assert.strictEqual(formatToDecimal('000a', { base: 16 }), 10);
  });

  it('converts hexadecimal strings (base 16) with 0x prefix', () => {
    assert.strictEqual(formatToDecimal('0xFF', { base: 16 }), 255);
    assert.strictEqual(formatToDecimal('0X10', { base: 16 }), 16);
  });

  // Whitespace and sign handling
  it('trims whitespace and supports optional sign', () => {
    assert.strictEqual(formatToDecimal('  1010  ', { base: 2 }), 10);
    assert.strictEqual(formatToDecimal('+0xFF', { base: 16 }), 255);
    assert.strictEqual(formatToDecimal('-0b10', { base: 2 }), -2);
  });

  // Errors: unsupported base
  it('throws for unsupported bases', () => {
    assert.throws(() => formatToDecimal('10', { base: 10 as any }), /Base must be one of 2, 8, or 16/);
  });

  // Errors: invalid input type or empty string
  it('throws TypeError for non-string inputs or empty strings', () => {
    assert.throws(() => formatToDecimal(1010 as any, { base: 2 }), /Input must be a string/);
    assert.throws(() => formatToDecimal('   ', { base: 2 }), /non-empty/);
  });

  // Errors: malformed or invalid values
  it('throws TypeError for malformed values', () => {
    assert.throws(() => formatToDecimal('102', { base: 2 }), /invalid characters/);
    assert.throws(() => formatToDecimal('89', { base: 8 }), /invalid characters/);
    assert.throws(() => formatToDecimal('0xG1', { base: 16 }), /invalid characters/);
    assert.throws(() => formatToDecimal('-', { base: 2 }), /Malformed/);
    assert.throws(() => formatToDecimal('+', { base: 16 }), /Malformed/);
  });
});
