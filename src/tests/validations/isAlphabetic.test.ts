import { describe, it } from 'node:test';
import assert from 'node:assert';
import { isAlphabetic } from '../../validations/isAlphabetic';

describe('isAlphabetic', () => {
  it('returns true for purely alphabetic strings', () => {
    assert.strictEqual(isAlphabetic('hello'), true);
    assert.strictEqual(isAlphabetic('World'), true);
    assert.strictEqual(isAlphabetic('TestCase'), true);
  });

  it('returns false for strings with numbers', () => {
    assert.strictEqual(isAlphabetic('hello123'), false);
    assert.strictEqual(isAlphabetic('Test1'), false);
  });

  it('returns false for strings with special characters or spaces', () => {
    assert.strictEqual(isAlphabetic('hello!'), false);
    assert.strictEqual(isAlphabetic('hello world'), false);
    assert.strictEqual(isAlphabetic('Hi-There'), false);
  });

  it('returns false for empty strings', () => {
    assert.strictEqual(isAlphabetic(''), false);
  });

  it('throws an error if input is not a string', () => {
    assert.throws(() => isAlphabetic(123 as any), /Input must be a string/);
    assert.throws(() => isAlphabetic(null as any), /Input must be a string/);
    assert.throws(() => isAlphabetic(undefined as any), /Input must be a string/);
  });
});
