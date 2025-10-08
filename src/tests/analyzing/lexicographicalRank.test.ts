import { describe, it } from 'node:test';
import assert from 'node:assert';
import { lexicographicalRank } from '../../analyzing/lexicographicalRank';

describe('lexicographicalRank', () => {
  it('returns correct rank for small strings', () => {
    assert.strictEqual(lexicographicalRank('acb'), 2);
    assert.strictEqual(lexicographicalRank('cba'), 6);
    assert.strictEqual(lexicographicalRank('abc'), 1);
  });

  it('handles strings with repeated characters', () => {
    assert.strictEqual(lexicographicalRank('aba'), 2);
    assert.strictEqual(lexicographicalRank('aab'), 1);
    assert.strictEqual(lexicographicalRank('baa'), 3);
  });

  it('returns 1 for single character string', () => {
    assert.strictEqual(lexicographicalRank('a'), 1);
    assert.strictEqual(lexicographicalRank('Z'), 1);
  });

  it('handles larger examples correctly', () => {
    assert.strictEqual(lexicographicalRank('string'), 598);
  });

  it('handles empty string', () => {
    assert.strictEqual(lexicographicalRank(''), 1);
  });

  it('is case-sensitive', () => {
    assert.strictEqual(lexicographicalRank('Abc'), 1); // 'A' < 'b' < 'c'
    assert.strictEqual(lexicographicalRank('bAc'), 3);
  });

  it('handles special characters', () => {
    assert.strictEqual(lexicographicalRank('!ab'), 1); // '!' comes first
    assert.strictEqual(lexicographicalRank('ab!'), 4); // correct rank is 4
  });

  it('throws an error if input is not a string', () => {
    assert.throws(() => lexicographicalRank(123 as any), /Input must be a string/);
    assert.throws(() => lexicographicalRank(null as any), /Input must be a string/);
    assert.throws(() => lexicographicalRank(undefined as any), /Input must be a string/);
  });
});
