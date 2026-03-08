import { describe, it } from 'node:test';
import assert from 'node:assert';
import { formatToOctal } from '../../formatting/octal';

describe('formatToOctal', () => {
  it('converts standard positive numbers', () => {
    assert.strictEqual(formatToOctal(8), '10');
    assert.strictEqual(formatToOctal(10), '12');
    assert.strictEqual(formatToOctal(255), '377');
    assert.strictEqual(formatToOctal(0), '0');
  });

  it('handles negative numbers', () => {
    assert.strictEqual(formatToOctal(-8), '-10');
    assert.strictEqual(formatToOctal(-255), '-377');
  });

  it('adds prefix when specified', () => {
    assert.strictEqual(formatToOctal(255, { prefix: true }), '0o377');
    assert.strictEqual(formatToOctal(-255, { prefix: true }), '-0o377');
    assert.strictEqual(formatToOctal(0, { prefix: true }), '0o0');
  });

  it('handles large integers', () => {
    const value = Number.MAX_SAFE_INTEGER;
    const expected = value.toString(8);
    assert.strictEqual(formatToOctal(value), expected);
  });

  it('throws TypeError for invalid inputs', () => {
    assert.throws(() => formatToOctal('10' as any), /Input must be a number/);
    assert.throws(() => formatToOctal(null as any), /Input must be a number/);
    assert.throws(() => formatToOctal(undefined as any), /Input must be a number/);
    assert.throws(() => formatToOctal(NaN as any), /Input must be a number/);
  });
});
