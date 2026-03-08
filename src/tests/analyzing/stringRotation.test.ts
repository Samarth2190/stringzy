import { describe, it } from 'node:test';
import assert from 'node:assert';
import { checkStringRotations } from '../../analyzing/stringRotation';

describe('checkStringRotations', () => {
  it('returns true for valid rotations', () => {
    assert.strictEqual(checkStringRotations('abcd', 'cdab'), true);
    assert.strictEqual(checkStringRotations('hello', 'ohell'), true);
    assert.strictEqual(checkStringRotations('12345', '45123'), true);
    assert.strictEqual(checkStringRotations('!@#$', '#$!@'), true);
  });

  it('returns false for invalid rotations', () => {
    assert.strictEqual(checkStringRotations('abc', 'acb'), false);
    assert.strictEqual(checkStringRotations('hello', 'helol'), false);
    assert.strictEqual(checkStringRotations('12345', '54321'), false);
  });

  it('is case-sensitive', () => {
    assert.strictEqual(checkStringRotations('ArB', 'Bar'), false);
    assert.strictEqual(checkStringRotations('Case', 'case'), false);
    assert.strictEqual(checkStringRotations('XYZ', 'yzx'), false);
  });

  it('returns true for empty strings', () => {
    assert.strictEqual(checkStringRotations('', ''), true);
  });

  it('returns false for strings of different lengths', () => {
    assert.strictEqual(checkStringRotations('abc', 'ab'), false);
    assert.strictEqual(checkStringRotations('abcd', ''), false);
  });

  it('handles special characters correctly', () => {
    assert.strictEqual(checkStringRotations('a@b$c', 'b$ca@'), true);
    assert.strictEqual(checkStringRotations('a@b$c', 'c$a@b'), false);
  });

  it('throws an error if inputs are not strings', () => {
    assert.throws(() => checkStringRotations(123 as any, '123'), /Both inputs must be strings/);
    assert.throws(() => checkStringRotations('abc', null as any), /Both inputs must be strings/);
    assert.throws(() => checkStringRotations(undefined as any, 'abc'), /Both inputs must be strings/);
  });
});
