import { describe, it } from 'node:test';
import assert from 'node:assert';
import { formatToHexadecimal } from '../../formatting/hexadecimal';

describe('formatToHexadecimal', () => {
  it('converts decimal to hexadecimal (uppercase by default)', () => {
    assert.strictEqual(formatToHexadecimal(10), 'A');
    assert.strictEqual(formatToHexadecimal(15), 'F');
    assert.strictEqual(formatToHexadecimal(255), 'FF');
    assert.strictEqual(formatToHexadecimal(4095), 'FFF');
  });

  it('handles negative numbers', () => {
    assert.strictEqual(formatToHexadecimal(-255), '-FF');
    assert.strictEqual(formatToHexadecimal(-4095), '-FFF');
  });

  it('supports prefix option (0x)', () => {
    assert.strictEqual(formatToHexadecimal(255, { prefix: true }), '0xFF');
    assert.strictEqual(formatToHexadecimal(-255, { prefix: true }), '-0xFF');
  });

  it('supports lowercase option', () => {
    assert.strictEqual(formatToHexadecimal(255, { lowercase: true }), 'ff');
    assert.strictEqual(formatToHexadecimal(4095, { lowercase: true }), 'fff');
  });

  it('supports both prefix and lowercase together', () => {
    assert.strictEqual(formatToHexadecimal(255, { prefix: true, lowercase: true }), '0xff');
    assert.strictEqual(formatToHexadecimal(-255, { prefix: true, lowercase: true }), '-0xff');
  });

  it('throws an error for non-numeric inputs', () => {
    assert.throws(() => formatToHexadecimal('123' as any), /Input must be a valid number/);
    assert.throws(() => formatToHexadecimal(null as any), /Input must be a valid number/);
    assert.throws(() => formatToHexadecimal(undefined as any), /Input must be a valid number/);
    assert.throws(() => formatToHexadecimal(NaN as any), /Input must be a valid number/);
  });
});
