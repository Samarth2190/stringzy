import { describe, it } from 'node:test';
import assert from 'node:assert';
import { isPalindrome } from '../../validations/isPalindrome';

describe('isPalindrome', () => {
  it('returns true for simple palindromes', () => {
    assert.strictEqual(isPalindrome('racecar'), true);
    assert.strictEqual(isPalindrome('madam'), true);
  });

  it('returns false for non-palindromes', () => {
    assert.strictEqual(isPalindrome('hello'), false);
    assert.strictEqual(isPalindrome('world'), false);
  });

  it('is case-insensitive', () => {
    assert.strictEqual(isPalindrome('RaceCar'), true);
    assert.strictEqual(isPalindrome('MadAm'), true);
  });

  it('ignores punctuation and spaces', () => {
    assert.strictEqual(isPalindrome('A man, a plan, a canal: Panama'), true);
    assert.strictEqual(isPalindrome('No lemon, no melon!'), true);
  });

  it('returns true for empty string and single characters', () => {
    assert.strictEqual(isPalindrome(''), true);
    assert.strictEqual(isPalindrome('x'), true);
  });

  it('handles strings with only special characters', () => {
    assert.strictEqual(isPalindrome('?!'), true); // cleans to ''
    assert.strictEqual(isPalindrome('!@#$$#@!'), true); // also cleans to ''
  });

  it('throws an error if input is not a string', () => {
    assert.throws(() => isPalindrome(123 as any), /Input must be a string/);
    assert.throws(() => isPalindrome(null as any), /Input must be a string/);
    assert.throws(() => isPalindrome(undefined as any), /Input must be a string/);
  });
});
