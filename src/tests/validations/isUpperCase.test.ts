import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { isUpperCase } from '../../validations/isUpperCase';

describe('isUpperCase', () => {
  it('returns true for all uppercase alphabetic strings', () => {
    assert.strictEqual(isUpperCase('HELLO'), true);
    assert.strictEqual(isUpperCase('WORLD'), true);
  });

  it('returns true for strings with uppercase letters, spaces, digits, or special characters', () => {
    assert.strictEqual(isUpperCase('HELLO WORLD!'), true);
    assert.strictEqual(isUpperCase('ABC123'), true);
    assert.strictEqual(isUpperCase('UPPER_CASE-ONLY!!'), true);
  });

  it('returns false if any lowercase alphabetic character is present', () => {
    assert.strictEqual(isUpperCase('Hello'), false);
    assert.strictEqual(isUpperCase('WORLDwide'), false);
    assert.strictEqual(isUpperCase('123abc'), false);
    assert.strictEqual(isUpperCase('@@good@@'), false);
  });

  it('returns false for an empty string', () => {
    assert.strictEqual(isUpperCase(''), false);
  });

  it('returns false for strings with only non-alphabetic characters (digits/symbols/spaces)', () => {
    assert.strictEqual(isUpperCase('12345'), false); // no letters
    assert.strictEqual(isUpperCase('!@#$%^&*()'), false);
    assert.strictEqual(isUpperCase('   '), false); // spaces only
  });

  it('returns true for single uppercase letters', () => {
    assert.strictEqual(isUpperCase('A'), true);
    assert.strictEqual(isUpperCase('Z'), true);
  });

  it('returns false for single lowercase letters', () => {
    assert.strictEqual(isUpperCase('a'), false);
    assert.strictEqual(isUpperCase('z'), false);
  });

  it('handles mixed alphanumeric correctly', () => {
    assert.strictEqual(isUpperCase('ABC123XYZ'), true);
    assert.strictEqual(isUpperCase('ABCxyz123'), false);
  });

  it('throws an error if input is not a string', () => {
    assert.throws(() => isUpperCase(123 as any), /Input must be a string/);
    assert.throws(() => isUpperCase(null as any), /Input must be a string/);
    assert.throws(() => isUpperCase(undefined as any), /Input must be a string/);
  });
});
