import { describe, it } from 'node:test';
import assert from 'node:assert';
import { formatRomanNumeral } from '../../formatting/romanNumerals';

describe('formatRomanNumeral', () => {
  it('correctly converts basic numerals', () => {
    assert.strictEqual(formatRomanNumeral(1), 'I');
    assert.strictEqual(formatRomanNumeral(4), 'IV');
    assert.strictEqual(formatRomanNumeral(9), 'IX');
  });

  it('correctly converts mid-range numbers', () => {
    assert.strictEqual(formatRomanNumeral(58), 'LVIII');      // 50 + 5 + 3
    assert.strictEqual(formatRomanNumeral(1994), 'MCMXCIV');  // 1000 + 900 + 90 + 4
    assert.strictEqual(formatRomanNumeral(2025), 'MMXXV');
  });

  it('correctly converts upper limit', () => {
    assert.strictEqual(formatRomanNumeral(3999), 'MMMCMXCIX');
  });

  it('throws error for 0 and negative numbers', () => {
    assert.throws(() => formatRomanNumeral(0), /Roman numerals are only defined for positive integers/);
    assert.throws(() => formatRomanNumeral(-5), /Roman numerals are only defined for positive integers/);
  });

  it('throws error for numbers above 3999', () => {
    assert.throws(() => formatRomanNumeral(4000), /Roman numerals are supported only up to 3999/);
  });

  it('throws TypeError for non-number inputs', () => {
    assert.throws(() => formatRomanNumeral('123' as any), /Input must be a number/);
    assert.throws(() => formatRomanNumeral(null as any), /Input must be a number/);
    assert.throws(() => formatRomanNumeral(undefined as any), /Input must be a number/);
  });
});
