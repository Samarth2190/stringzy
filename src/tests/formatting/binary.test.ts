import { describe, it } from 'node:test';
import assert from 'node:assert';
import { formatToBinary } from '../../formatting/binary';

describe('formatToBinary', () => {
  it('converts standard positive integers', () => {
    assert.strictEqual(formatToBinary(5), '101');
    assert.strictEqual(formatToBinary(10), '1010');
    assert.strictEqual(formatToBinary(255), '11111111');
    assert.strictEqual(formatToBinary(1), '1');
    assert.strictEqual(formatToBinary(2), '10');
  });

  it('handles zero', () => {
    assert.strictEqual(formatToBinary(0), '0');
  });

  it('prefixes negative numbers with a minus sign', () => {
    assert.strictEqual(formatToBinary(-5), '-101');
    assert.strictEqual(formatToBinary(-10), '-1010');
  });

  it('supports optional grouping from right to left (LSB first)', () => {
    assert.strictEqual(formatToBinary(255, { group: 4 }), '1111 1111');
    assert.strictEqual(formatToBinary(10, { group: 2 }), '10 10');
    assert.strictEqual(formatToBinary(5, { group: 4 }), '101'); // no padding on the left
    assert.strictEqual(formatToBinary(1023, { group: 4 }), '11 1111 1111');
  });

  it('applies grouping with negative numbers', () => {
    assert.strictEqual(formatToBinary(-255, { group: 4 }), '-1111 1111');
  });

  it('handles large integers (MAX_SAFE_INTEGER)', () => {
    const expected = Number.MAX_SAFE_INTEGER.toString(2);
    assert.strictEqual(formatToBinary(Number.MAX_SAFE_INTEGER), expected);
  });

  it('throws TypeError for invalid inputs (type/NaN)', () => {
    assert.throws(() => formatToBinary('5' as any), /Input must be a number/);
    assert.throws(() => formatToBinary(null as any), /Input must be a number/);
    assert.throws(() => formatToBinary(undefined as any), /Input must be a number/);
    assert.throws(() => formatToBinary(NaN as any), /Input must be a number/);
  });

  it('throws TypeError for non-integer numbers', () => {
    assert.throws(() => formatToBinary(3.14 as any), /Input must be an integer/);
    assert.throws(() => formatToBinary(-2.5 as any), /Input must be an integer/);
  });

  it('throws TypeError for invalid group size', () => {
    assert.throws(() => formatToBinary(10, { group: 0 }), /Group size must be a positive integer/);
    assert.throws(() => formatToBinary(10, { group: -1 }), /Group size must be a positive integer/);
    assert.throws(() => formatToBinary(10, { group: 2.5 as any }), /Group size must be a positive integer/);
    assert.throws(() => formatToBinary(10, { group: '4' as any }), /Group size must be a positive integer/);
  });
});


