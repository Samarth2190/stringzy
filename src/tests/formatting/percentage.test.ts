import { describe, it } from 'node:test';
import assert from 'node:assert';
import { formatPercentage } from '../../formatting/percentage';

describe('formatPercentage', () => {
  it('formats numbers correctly with default precision', () => {
    assert.strictEqual(formatPercentage(0.567), '56.70%');
    assert.strictEqual(formatPercentage(0.5), '50.00%');
    assert.strictEqual(formatPercentage(1), '100.00%');
  });

  it('formats numbers correctly with custom precision', () => {
    assert.strictEqual(formatPercentage(0.567, 1), '56.7%');
    assert.strictEqual(formatPercentage(0.5, 0), '50%');
  });

  it('supports negative numbers', () => {
    assert.strictEqual(formatPercentage(-0.25, 0), '-25%');
    assert.strictEqual(formatPercentage(-0.1234, 2), '-12.34%');
  });

  it('works with whole numbers (scales by 100)', () => {
    assert.strictEqual(formatPercentage(50, 0), '5000%');
  });

  it('handles zero correctly', () => {
    assert.strictEqual(formatPercentage(0), '0.00%');
  });

  it('throws TypeError for invalid inputs', () => {
    assert.throws(() => formatPercentage('0.5' as any), /Input must be a number/);
    assert.throws(() => formatPercentage(null as any), /Input must be a number/);
    assert.throws(() => formatPercentage(undefined as any), /Input must be a number/);
  });

  it('throws TypeError for invalid precision', () => {
    assert.throws(() => formatPercentage(0.5, -1), /Precision must be a non-negative number/);
    assert.throws(() => formatPercentage(0.5, '2' as any), /Precision must be a non-negative number/);
  });
});
