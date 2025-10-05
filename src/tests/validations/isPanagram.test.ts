import { describe, it } from 'node:test';
import assert from 'node:assert';
import { isPanagram } from '../../validations/isPanagram';


describe('isPanagram', () => {
  it('returns true for a classic pangram sentence', () => {
    assert.strictEqual(isPanagram('The quick brown fox jumps over the lazy dog.'), true);
  });


  it('returns true for the alphabet with hyphens or separators', () => {
    assert.strictEqual(isPanagram('A-B-C-D-E-F-G-H-I-J-K-L-M-N-O-P-Q-R-S-T-U-V-W-X-Y-Z'), true);
  });


  it('returns true for alphabet without separators', () => {
    assert.strictEqual(isPanagram('Abcdefghijklmnopqrstuvwxyz'), true);
  });


  it('returns true for alphabet in mixed case', () => {
    assert.strictEqual(isPanagram('AbCdEfGhIjKlMnOpQrStUvWxYz'), true);
  });


  it('returns false for non-pangram sentences', () => {
    assert.strictEqual(isPanagram('This is not a pangram.'), false);
    assert.strictEqual(isPanagram('Hello world'), false);
    assert.strictEqual(isPanagram('Quick fox'), false);
  });


  it('returns false for empty strings', () => {
    assert.strictEqual(isPanagram(''), false);
  });


  it('ignores numbers and punctuation', () => {
    assert.strictEqual(isPanagram('The quick brown fox jumps over the lazy dog! 12345'), true);
    assert.strictEqual(isPanagram('1234567890 !!! ???'), false);
  });


  it('throws an error if input is not a string', () => {
    assert.throws(() => isPanagram(123 as any), /Input must be a string/);
    assert.throws(() => isPanagram(null as any), /Input must be a string/);
    assert.throws(() => isPanagram(undefined as any), /Input must be a string/);
  });
});
