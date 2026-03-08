import { describe, it } from 'node:test';
import assert from 'node:assert';
import { formatOrdinal } from '../../formatting/ordinal';

describe('formatOrdinal', () => {
  it('formats basic ordinals correctly', () => {
    assert.strictEqual(formatOrdinal(1), '1st');
    assert.strictEqual(formatOrdinal(2), '2nd');
    assert.strictEqual(formatOrdinal(3), '3rd');
    assert.strictEqual(formatOrdinal(4), '4th');
    assert.strictEqual(formatOrdinal(10), '10th');
  });

  it('handles special teen cases (11, 12, 13)', () => {
    assert.strictEqual(formatOrdinal(11), '11th');
    assert.strictEqual(formatOrdinal(12), '12th');
    assert.strictEqual(formatOrdinal(13), '13th');
  });

  it('handles large numbers correctly', () => {
    assert.strictEqual(formatOrdinal(21), '21st');
    assert.strictEqual(formatOrdinal(22), '22nd');
    assert.strictEqual(formatOrdinal(23), '23rd');
    assert.strictEqual(formatOrdinal(24), '24th');
    assert.strictEqual(formatOrdinal(101), '101st');
    assert.strictEqual(formatOrdinal(111), '111th');
    assert.strictEqual(formatOrdinal(112), '112th');
    assert.strictEqual(formatOrdinal(113), '113th');
  });

  it('throws TypeError for invalid inputs', () => {
    assert.throws(() => formatOrdinal('21' as any), /Input must be a number/);
    assert.throws(() => formatOrdinal(null as any), /Input must be a number/);
    assert.throws(() => formatOrdinal(undefined as any), /Input must be a number/);
  });
});
