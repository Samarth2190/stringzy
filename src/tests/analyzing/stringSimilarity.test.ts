import { describe, it } from 'node:test';
import assert from 'node:assert';
import { stringSimilarity } from '../../analyzing/stringSimilarity';

describe('stringSimilarity', () => {
  describe('Param error handling', () => {
    it('should throw if text arguments are not a string', () => {
      assert.throws(
        () => stringSimilarity(123 as any, 'abc'),
        /Both text arguments must be strings/i
      );
      assert.throws(
        () => stringSimilarity('abc', null as any),
        /Both text arguments must be strings/i
      );
    });

    it('should throw if algorithm argument is invalid', () => {
      assert.throws(
        () => stringSimilarity('abc', 'abc', 'invalid' as any),
        /Invalid optional algorithm param. Should be 'Levenshtein' or 'Damerau-Levenshtein'/i
      );
    });
  });

  describe('Basic similarity cases', () => {
    it('should return 100% for identical strings', () => {
      assert.strictEqual(stringSimilarity('abc', 'abc', 'Levenshtein'), 100.0);
      assert.strictEqual(stringSimilarity('abc', 'abc', 'Damerau-Levenshtein'), 100.0);
    });

    it('should return 100% for two empty strings', () => {
      assert.strictEqual(stringSimilarity('', '', 'Levenshtein'), 100.0);
      assert.strictEqual(stringSimilarity('', '', 'Damerau-Levenshtein'), 100.0);
    });

    it('should return 0% for empty vs non-empty string', () => {
      assert.strictEqual(stringSimilarity('abc', '', 'Levenshtein'), 0.0);
      assert.strictEqual(stringSimilarity('abc', '', 'Damerau-Levenshtein'), 0.0);
    });

    it('should return 0% for same letters with different case (case-sensitive)', () => {
      assert.strictEqual(stringSimilarity('ABC', 'abc', 'Levenshtein'), 0.0);
      assert.strictEqual(stringSimilarity('ABC', 'abc', 'Damerau-Levenshtein'), 0.0);
    });

    it('should return 0% for completely different strings (abc vs xyz)', () => {
      assert.strictEqual(stringSimilarity('abc', 'xyz', 'Levenshtein'), 0.0);
      assert.strictEqual(stringSimilarity('abc', 'xyz', 'Damerau-Levenshtein'), 0.0);
    });
  });

  describe('Algorithm comparison: Levenshtein vs Damerau-Levenshtein', () => {
    it('should return 0% for transposition using Levenshtein (ab vs ba)', () => {
      assert.strictEqual(stringSimilarity('ab', 'ba', 'Levenshtein'), 0.0);
    });

    it('should return 50% for transposition using Damerau-Levenshtein (ab vs ba)', () => {
      assert.strictEqual(stringSimilarity('ab', 'ba', 'Damerau-Levenshtein'), 50.0);
    });

    it('should return 50% for near transposition using Levenshtein (acbd vs abcd)', () => {
      assert.strictEqual(stringSimilarity('acbd', 'abcd', 'Levenshtein'), 50.0);
    });

    it('should return 75% for near transposition using Damerau-Levenshtein (acbd vs abcd)', () => {
      assert.strictEqual(stringSimilarity('acbd', 'abcd', 'Damerau-Levenshtein'), 75.0);
    });

    it('should return 75% for single insertion using Levenshtein (abc vs abcd)', () => {
      assert.strictEqual(stringSimilarity('abc', 'abcd', 'Levenshtein'), 75.0);
    });

    it('should return 75% for single deletion using Levenshtein (abcd vs abc)', () => {
      assert.strictEqual(stringSimilarity('abcd', 'abc', 'Levenshtein'), 75.0);
    });
  });
});
