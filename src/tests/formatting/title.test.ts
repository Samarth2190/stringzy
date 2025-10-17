 import { describe, it } from 'node:test';
import assert from 'node:assert';
import { formatTitle } from '../../formatting/title';

describe('formatTitle', () => {
  it('formats regular titles correctly', () => {
    assert.strictEqual(formatTitle('the lord of the rings'), 'The Lord of the Rings');
    assert.strictEqual(formatTitle('a tale of two cities'), 'A Tale of Two Cities');
    assert.strictEqual(formatTitle('gone with the wind'), 'Gone With the Wind');
  });

  it('preserves punctuation and spacing', () => {
    assert.strictEqual(formatTitle('the man, the myth, the legend'), 'The Man, the Myth, the Legend');
    assert.strictEqual(formatTitle('war and peace!'), 'War and Peace!');
  });

  it('handles single-word titles', () => {
    assert.strictEqual(formatTitle('dune'), 'Dune');
  });

  it('returns empty string for blank input', () => {
    assert.strictEqual(formatTitle('   '), '');
  });

  it('throws TypeError for non-string inputs', () => {
    assert.throws(() => formatTitle(123 as any), /Input must be a string/);
    assert.throws(() => formatTitle(null as any), /Input must be a string/);
    assert.throws(() => formatTitle(undefined as any), /Input must be a string/);
  });

  it('capitalizes first and last words even if they are short articles', () => {
    assert.strictEqual(formatTitle('a day in the life of a cat'), 'A Day in the Life of a Cat');
    assert.strictEqual(formatTitle('in the end'), 'In the End');
  });
});