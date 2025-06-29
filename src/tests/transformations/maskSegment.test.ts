import { describe, it } from 'node:test';
import assert from 'node:assert';
import { maskSegment } from '../../transformations/maskSegment';

describe('maskSegment', () => {
  it('masks the string correctly', () => {
    assert.strictEqual(maskSegment('1234567890', 2, 6), '12****7890');
  });

  it('masks full string if entire range is selected', () => {
    assert.strictEqual(maskSegment('secret', 0, 6), '******');
  });

  it('supports custom mask character', () => {
    assert.strictEqual(maskSegment('abcdef', 1, 4, '#'), 'a###ef');
  });

  it('throws on invalid range', () => {
    assert.throws(() => maskSegment('abc', 2, 1));
    assert.throws(() => maskSegment('abc', -1, 2));
    assert.throws(() => maskSegment('abc', 0, 4));
  });

  it('throws if maskChar is more than one character', () => {
    assert.throws(() => maskSegment('abc', 0, 2, '**'));
  });

  it('handles empty string', () => {
    assert.throws(() => maskSegment('', 0, 1));
  });
});
