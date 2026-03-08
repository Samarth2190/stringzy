import { describe, it } from 'node:test';
import assert from 'node:assert';
import { checkSubsequence } from '../../analyzing/checkSubsequence';

describe('checkSubsequence', () => {
  it('returns true for valid subsequences', () => {
    assert.strictEqual(checkSubsequence('abcde', 'ace'), true);
    assert.strictEqual(checkSubsequence('abracadabra', 'aaa'), true);
    assert.strictEqual(checkSubsequence('hello world', 'hlo'), true);
  });

  it('returns false when order is broken', () => {
    assert.strictEqual(checkSubsequence('abcde', 'aec'), false);
    assert.strictEqual(checkSubsequence('abcdef', 'z'), false);
  });

  it('handles empty subsequence', () => {
    assert.strictEqual(checkSubsequence('anything', ''), true);
  });

  it('is case-sensitive', () => {
    assert.strictEqual(checkSubsequence('abc', 'A'), false);
    assert.strictEqual(checkSubsequence('AbC', 'AC'), true);
  });

  it('handles spaces as normal characters', () => {
    assert.strictEqual(checkSubsequence('a b c', 'abc'), true); 
    assert.strictEqual(checkSubsequence('a b c', 'a c'), true);
  });

  it('throws if inputs are not strings', () => {
    assert.throws(() => checkSubsequence(123 as any, 'abc'), /Both inputs must be strings/);
    assert.throws(() => checkSubsequence('abc', null as any), /Both inputs must be strings/);
  });
});
