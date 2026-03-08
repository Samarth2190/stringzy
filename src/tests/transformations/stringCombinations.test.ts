import { describe, it } from 'node:test';
import assert from 'node:assert';
import { stringCombinations } from '../../transformations/stringCombinations';

describe('stringCombinations', () => {
  it('returns correct combinations for 2 characters', () => {
    const expected = ['', 'a', 'b', 'ab'];
    assert.deepStrictEqual(stringCombinations('ab').sort(), expected.sort());
  });

  it('returns correct combinations for 3 unique characters', () => {
    const expected = ['', 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc'];
    assert.deepStrictEqual(stringCombinations('abc').sort(), expected.sort());
  });

  it('handles repeated characters correctly', () => {
    const expected = ['', 'a', 'b', 'aa', 'ab', 'aab'];
    assert.deepStrictEqual(stringCombinations('aab').sort(), expected.sort());
  });

  it('returns only empty string for empty input', () => {
    assert.deepStrictEqual(stringCombinations(''), ['']);
  });

  it('handles single character input', () => {
    assert.deepStrictEqual(stringCombinations('a'), ['', 'a']);
  });

  it('is case-sensitive', () => {
    const expected = ['', 'A', 'b', 'Ab'];
    assert.deepStrictEqual(stringCombinations('Ab').sort(), expected.sort());
  });

  it('handles special characters correctly', () => {
    const expected = ['', '!', '@', '!@'];
    assert.deepStrictEqual(stringCombinations('!@').sort(), expected.sort());
  });

  it('throws an error if input is not a string', () => {
    assert.throws(() => stringCombinations(123 as any), /Input must be a string/);
    assert.throws(() => stringCombinations(null as any), /Input must be a string/);
    assert.throws(() => stringCombinations(undefined as any), /Input must be a string/);
  });
});
