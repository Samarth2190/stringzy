import { describe, it } from 'node:test';
import assert from 'node:assert';
import { reverseWordsInString } from '../../transformations/reverseWordsInString '

describe('reverseWordsInString', () => {
  it('reverses words while preserving multiple spaces between them', () => {
    assert.strictEqual(
      reverseWordsInString('Hello   world  from   stringzy'),
      'stringzy   from  world   Hello'
    );
  });

  it('preserves the exact leading and trailing spaces', () => {
    assert.strictEqual(
      reverseWordsInString('  leading and trailing  '),
      '  trailing and leading  '
    );
    assert.strictEqual(
      reverseWordsInString('leading and trailing  '),
      'trailing and leading  '
    );
    assert.strictEqual(
      reverseWordsInString('  leading and trailing'),
      '  trailing and leading'
    );
  });

  it('handles a complex mix of spacing correctly', () => {
    assert.strictEqual(
      reverseWordsInString('  first   second  third '),
      '  third   second  first '
    );
  });

  it('handles a single word with or without spaces', () => {
    assert.strictEqual(reverseWordsInString('singleword'), 'singleword');
    assert.strictEqual(
      reverseWordsInString('  singleword  '),
      '  singleword  '
    );
  });

  it('returns the original string if it contains only whitespace', () => {
    assert.strictEqual(reverseWordsInString('   '), '   ');
    assert.strictEqual(reverseWordsInString('\t \n'), '\t \n');
  });

  it('returns an empty string for an empty input', () => {
    assert.strictEqual(reverseWordsInString(''), '');
  });

  it('handles words with numbers and special characters correctly', () => {
    assert.strictEqual(
      reverseWordsInString('word1!   word2@#$'),
      'word2@#$   word1!'
    );
  });

  it('throws a TypeError if the input is not a string', () => {
    assert.throws(() => reverseWordsInString(12345 as any), /Input must be a string/);
    assert.throws(() => reverseWordsInString(null as any), /Input must be a string/);
    assert.throws(() => reverseWordsInString(undefined as any), /Input must be a string/);
    assert.throws(() => reverseWordsInString({} as any), /Input must be a string/);
  });
});
