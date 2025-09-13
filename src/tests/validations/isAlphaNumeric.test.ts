import { describe, it } from 'node:test';
import assert from 'node:assert';
import { isAlphaNumeric } from '../../validations/isAlphaNumeric';

describe('isAlphaNumeric', () => {
  it('returns true for alphanumeric strings', () => {
    assert.strictEqual(isAlphaNumeric('abc123'), true);
    assert.strictEqual(isAlphaNumeric('A1B2C3'), true);
    assert.strictEqual(isAlphaNumeric('123'), true);
    assert.strictEqual(isAlphaNumeric('abc'), true);
  });

  it('returns false for strings with special characters or spaces', () => {
    assert.strictEqual(isAlphaNumeric('abc!123'), false);
    assert.strictEqual(isAlphaNumeric('hello world'), false);
    assert.strictEqual(isAlphaNumeric('test@'), false);
  });

  it('returns false for empty string', () => {
    assert.strictEqual(isAlphaNumeric(''), false);
  });

  it('throws an error if input is not a string', () => {
    assert.throws(() => isAlphaNumeric(123 as any), /Input must be a string/);
    assert.throws(() => isAlphaNumeric(null as any), /Input must be a string/);
    assert.throws(() => isAlphaNumeric(undefined as any), /Input must be a string/);
    assert.throws(() => isAlphaNumeric({} as any), /Input must be a string/);
  });
});
