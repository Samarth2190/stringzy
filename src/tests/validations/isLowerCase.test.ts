import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { isLowerCase } from '../../validations/isLowerCase';

describe('isLowerCase', () => {
  it('returns true for all lowercase alphabetic strings', () => {
    assert.strictEqual(isLowerCase('hello'), true);
    assert.strictEqual(isLowerCase('world'), true);
  });

  it('returns true for strings with lowercase letters, spaces, digits, or special characters', () => {
    assert.strictEqual(isLowerCase('hello world!'), true);
    assert.strictEqual(isLowerCase('abc123'), true);
    assert.strictEqual(isLowerCase('lower_case-only!!'), true);
  });

  it('returns false if any uppercase alphabetic character is present', () => {
    assert.strictEqual(isLowerCase('Hello'), false);
    assert.strictEqual(isLowerCase('worldWide'), false);
    assert.strictEqual(isLowerCase('123ABC'), false);
    assert.strictEqual(isLowerCase('@@Good@@'), false);
  });

  it('returns false for an empty string', () => {
    assert.strictEqual(isLowerCase(''), false);
  });

  it('returns true for strings with only non-alphabetic characters (digits/symbols/spaces)', () => {
    assert.strictEqual(isLowerCase('12345'), false); // no letters
    assert.strictEqual(isLowerCase('!@#$%^&*()'), false);
    assert.strictEqual(isLowerCase('   '), false); // spaces only
  });

  it('returns true for single lowercase letters', () => {
    assert.strictEqual(isLowerCase('a'), true);
    assert.strictEqual(isLowerCase('z'), true);
  });

  it('returns false for single uppercase letters', () => {
    assert.strictEqual(isLowerCase('A'), false);
    assert.strictEqual(isLowerCase('Z'), false);
  });

  it('handles mixed alphanumeric correctly', () => {
    assert.strictEqual(isLowerCase('abc123xyz'), true);
    assert.strictEqual(isLowerCase('abcXYZ123'), false);
  });

  it('throws an error if input is not a string', () => {
    assert.throws(() => isLowerCase(123 as any), /Input must be a string/);
    assert.throws(() => isLowerCase(null as any), /Input must be a string/);
    assert.throws(() => isLowerCase(undefined as any), /Input must be a string/);
  });
});
