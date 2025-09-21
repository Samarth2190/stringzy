import { describe, it } from 'node:test';
import assert from 'node:assert';
import { isAnagram } from '../../validations/isAnagram';

describe('isAnagram', () => {
  it('returns true for valid anagrams (simple lowercase words)', () => {
    assert.strictEqual(isAnagram('listen', 'silent'), true);
    assert.strictEqual(isAnagram('evil', 'vile'), true);
  });

  it('returns true for case-insensitive matches', () => {
    assert.strictEqual(isAnagram('Listen', 'Silent'), true);
    assert.strictEqual(isAnagram('Debit Card', 'Bad Credit'), true);
  });

  it('returns true when ignoring spaces and punctuation', () => {
    assert.strictEqual(isAnagram('Astronomer', 'Moon starer'), true);
    assert.strictEqual(isAnagram('The eyes!!', 'They see'), true);
  });

  it('returns false for non-anagrams', () => {
    assert.strictEqual(isAnagram('hello', 'world'), false);
    assert.strictEqual(isAnagram('abc', 'abcd'), false);
  });

  it('returns true for single character anagrams', () => {
    assert.strictEqual(isAnagram('a', 'a'), true);
  });

  it('returns false for different single characters', () => {
    assert.strictEqual(isAnagram('a', 'b'), false);
  });

  it('returns true for empty strings (both empty)', () => {
    assert.strictEqual(isAnagram('', ''), true);
  });

  it('returns false when only one string is empty', () => {
    assert.strictEqual(isAnagram('', 'a'), false);
    assert.strictEqual(isAnagram('a', ''), false);
  });

  it('throws an error if inputs are not strings', () => {
    assert.throws(() => isAnagram(123 as any, 'abc'), /Both inputs must be strings/);
    assert.throws(() => isAnagram(null as any, 'abc'), /Both inputs must be strings/);
    assert.throws(() => isAnagram(undefined as any, 'abc'), /Both inputs must be strings/);
  });
});
