import { describe, it } from 'node:test';
import assert from 'node:assert';
import { formatScientific } from '../../formatting/scientific';

describe('formatScientific', () => {
  it('converts numbers to scientific notation with default precision (2)', () => {
    assert.strictEqual(formatScientific(12345), '1.23e+4');
    assert.strictEqual(formatScientific(0.000123), '1.23e-4');
  });

  it('handles negative numbers correctly', () => {
    assert.strictEqual(formatScientific(-12345), '-1.23e+4');
    assert.strictEqual(formatScientific(-0.000987), '-9.87e-4');
  });

  it('applies custom precision', () => {
    assert.strictEqual(formatScientific(1000000, { precision: 4 }), '1.0000e+6');
    assert.strictEqual(formatScientific(98765, { precision: 3 }), '9.877e+4');
  });

  it('uses uppercase E when specified', () => {
    assert.strictEqual(formatScientific(98765, { uppercase: true }), '9.88E+4');
    assert.strictEqual(formatScientific(0.000123, { uppercase: true }), '1.23E-4');
  });

  it('combines precision and uppercase options', () => {
    assert.strictEqual(formatScientific(12345, { precision: 5, uppercase: true }), '1.23450E+4');
  });

  it('throws an error for invalid inputs', () => {
    assert.throws(() => formatScientific('12345' as any), /Input must be a valid number/);
    assert.throws(() => formatScientific(null as any), /Input must be a valid number/);
    assert.throws(() => formatScientific(undefined as any), /Input must be a valid number/);
    assert.throws(() => formatScientific(NaN as any), /Input must be a valid number/);
  });
});
