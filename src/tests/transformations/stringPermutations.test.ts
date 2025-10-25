import { describe, it } from 'node:test';
import assert from 'node:assert';
import { stringPermutations, stringPermutationsGenerator } from '../../transformations/stringPermutations';

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

  it('respects limit parameter', () => {
    const result = stringPermutations('abcdef', 3);
    assert.strictEqual(result.length, 3);
    
    // All results should be valid permutations
    for (const perm of result) {
      assert.strictEqual(perm.length, 6);
      assert.strictEqual([...perm].sort().join(''), 'abcdef');
    }
  });

  it('throws error for negative limit', () => {
    assert.throws(() => stringPermutations('abc', -1), /Limit must be non-negative/);
  });

  it('handles limit of 0', () => {
    const result = stringPermutations('abc', 0);
    assert.strictEqual(result.length, 0);
  });

  it('handles limit larger than total permutations', () => {
    const result = stringPermutations('abc', 100);
    assert.strictEqual(result.length, 6); // 3! = 6
  });
});

describe('stringPermutationsGenerator', () => {
  it('yields correct permutations for small strings', () => {
    const result = Array.from(stringPermutationsGenerator('ab')).sort();
    assert.deepStrictEqual(result, ['ab', 'ba']);
  });

  it('yields all permutations for 3 unique characters', () => {
    const result = Array.from(stringPermutationsGenerator('abc')).sort();
    const expected = ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'];
    assert.deepStrictEqual(result, expected);
  });

  it('handles repeated characters correctly', () => {
    const result = Array.from(stringPermutationsGenerator('aab')).sort();
    const expected = ['aab', 'aba', 'baa'];
    assert.deepStrictEqual(result, expected);
  });

  it('handles single character input', () => {
    const result = Array.from(stringPermutationsGenerator('a'));
    assert.deepStrictEqual(result, ['a']);
  });

  it('handles empty string input', () => {
    const result = Array.from(stringPermutationsGenerator(''));
    assert.deepStrictEqual(result, ['']);
  });

  it('is case-sensitive', () => {
    const result = Array.from(stringPermutationsGenerator('Ab')).sort();
    const expected = ['Ab', 'bA'];
    assert.deepStrictEqual(result, expected);
  });

  it('handles special characters', () => {
    const result = Array.from(stringPermutationsGenerator('!@')).sort();
    const expected = ['!@', '@!'];
    assert.deepStrictEqual(result, expected);
  });

  it('throws an error if input is not a string', () => {
    // Generator functions throw when first consumed, not when created
    const gen1 = stringPermutationsGenerator(123 as any);
    assert.throws(() => gen1.next(), /Input must be a string/);
    
    const gen2 = stringPermutationsGenerator(null as any);
    assert.throws(() => gen2.next(), /Input must be a string/);
    
    const gen3 = stringPermutationsGenerator(undefined as any);
    assert.throws(() => gen3.next(), /Input must be a string/);
  });

  it('can be used with for...of loop', () => {
    const results: string[] = [];
    for (const perm of stringPermutationsGenerator('abc')) {
      results.push(perm);
    }
    assert.strictEqual(results.length, 6);
  });
});
