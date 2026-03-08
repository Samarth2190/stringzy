import { describe, it } from 'node:test';
import assert from 'node:assert';
import { patternCount } from '../../analyzing/patternCount';

describe('patternCount', () => {
  it('returns 0 for empty string', () => {
    assert.deepStrictEqual(patternCount('', 'aa'), 0);
  });
  it('returns 0 for empty pattern', () => {
    assert.deepStrictEqual(patternCount('abc', ''), 0);
  });
  it('returns 0 for empty string and empty pattern', () => {
    assert.deepStrictEqual(patternCount('', ''), 0);
  });
  it('returns correct count for single character pattern', () => {
    assert.strictEqual(patternCount('abcabcabc', 'a'), 3);
  });
  it('returns correct count for multi-character pattern', () => {
    assert.strictEqual(patternCount('abcabcabc', 'ab'), 3);
  });
  it('returns correct count for overlapping patterns', () => {
    assert.strictEqual(patternCount('ababababa', 'aba'), 4);
  });
  it('returns correct count for non-overlapping patterns', () => {
    assert.strictEqual(patternCount('abababab', 'ab'), 4);
  });
  it('returns 0 for pattern not found', () => {
    assert.strictEqual(patternCount('abcdefg', 'xyz'), 0);
  });
});
