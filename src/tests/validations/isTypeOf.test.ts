import { describe, it } from 'node:test';
import assert from 'node:assert';
import { isTypeOf } from '../../validations/isTypeOf';

describe('isType', () => {
  it('returns true for valid file', () => {
    assert.strictEqual(isTypeOf('photo.PNG', 'image'), true);
  });

  it('returns false for unknown extension', () => {
    assert.strictEqual(isTypeOf('unknown.xyz', 'document'), false);
  });

  it('returns false for unknown type category', () => {
    assert.strictEqual(isTypeOf('photo.png', 'media'), false);
  });

  it('returns false for mismatched type', () => {
    assert.strictEqual(isTypeOf('video.mp4', 'document'), false);
  });

  it('returns false for missing extension', () => {
    assert.strictEqual(isTypeOf('filewithoutextension', 'image'), false);
  });

  it('handles URL with query and hash fragments', () => {
    assert.strictEqual(isTypeOf('https://example.com/pic.jpeg?version=2#section', 'image'), true);
  });

});
