import { describe, it } from 'node:test';
import assert from 'node:assert';
import { isType } from '../../validations/isType';

describe('isType', () => {
  it('returns true for valid file', () => {
    assert.strictEqual(isType('photo.PNG', 'image'), true);
  });

  it('returns false for unknown extension', () => {
    assert.strictEqual(isType('unknown.xyz', 'document'), false);
  });

  it('returns false for unknown type category', () => {
    assert.strictEqual(isType('photo.png', 'media'), false);
  });

  it('returns false for mismatched type', () => {
    assert.strictEqual(isType('video.mp4', 'document'), false);
  });

  it('returns false for missing extension', () => {
    assert.strictEqual(isType('filewithoutextension', 'image'), false);
  });

  it('handles URL with query and hash fragments', () => {
    assert.strictEqual(isType('https://example.com/pic.jpeg?version=2#section', 'image'), true);
  });

  it('returns true for file-like object with name', () => {
    const file = { name: 'avatar.jpg' };
    assert.strictEqual(isType(file, 'image'), true);
  });

  it('returns false for object missing name property', () => {
    const file = { filename: 'image.jpg' };
    assert.strictEqual(isType(file, 'image'), false);
  });

});
