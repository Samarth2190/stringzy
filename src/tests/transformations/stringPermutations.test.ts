import { describe, it } from 'node:test';
import assert from 'node:assert';
import { stringPermutations } from '../../transformations/stringPermutations';

describe('stringPermutations', () => {
  it('returns correct permutations for small strings', () => {
    assert.deepStrictEqual(
      stringPermutations('ab').sort(),
      ['ab', 'ba'].sort()
    );
  });

  it('returns all permutations for 3 unique characters', () => {
    const expected = ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'];
    assert.deepStrictEqual(
      stringPermutations('abc').sort(),
      expected.sort()
    );
  });

  it('handles repeated characters correctly', () => {
    const expected = ['aab', 'aba', 'baa'];
    assert.deepStrictEqual(
      stringPermutations('aab').sort(),
      expected.sort()
    );
  });

  it('handles single character input', () => {
    assert.deepStrictEqual(stringPermutations('a'), ['a']);
  });

  it('handles empty string input', () => {
    assert.deepStrictEqual(stringPermutations(''), ['']);
  });

  it('is case-sensitive', () => {
    const expected = ['Ab', 'bA'];
    assert.deepStrictEqual(
      stringPermutations('Ab').sort(),
      expected.sort()
    );
  });

  it('handles special characters', () => {
    const expected = ['!@', '@!'];
    assert.deepStrictEqual(
      stringPermutations('!@').sort(),
      expected.sort()
    );
  });

  it('throws an error if input is not a string', () => {
    assert.throws(() => stringPermutations(123 as any), /Input must be a string/);
    assert.throws(() => stringPermutations(null as any), /Input must be a string/);
    assert.throws(() => stringPermutations(undefined as any), /Input must be a string/);
  });
});
