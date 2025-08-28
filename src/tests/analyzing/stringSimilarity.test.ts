import { stringSimilarity } from '../../analyzing/stringSimilarity';

describe('stringSimilarity', () => {
  describe('Param error handling', () => {
    it('should throw if text arguments are not a string', () => {
      expect(() => stringSimilarity(123 as any, 'abc')).toThrow(/Both text arguments must be strings/i);
      expect(() => stringSimilarity('abc', null as any)).toThrow(/Both text arguments must be strings/i);
    });

    it('should throw if algorithm argument is invalid', () => {
      expect(() => stringSimilarity('abc', 'abc', 'invalid' as any))
        .toThrow(/Invalid optional algorithm param. Should be 'Levenshtein' or 'Damerau-Levenshtein'/i);
    });
  });

  describe('Basic similarity cases', () => {
    it('should return 100% for identical strings', () => {
      expect(stringSimilarity('abc', 'abc', 'Levenshtein')).toBe(100.0);
      expect(stringSimilarity('abc', 'abc', 'Damerau-Levenshtein')).toBe(100.0);
    });

    it('should return 100% for two empty strings', () => {
      expect(stringSimilarity('', '', 'Levenshtein')).toBe(100.0);
      expect(stringSimilarity('', '', 'Damerau-Levenshtein')).toBe(100.0);
    });

    it('should return 0% for empty vs non-empty string', () => {
      expect(stringSimilarity('abc', '', 'Levenshtein')).toBe(0.0);
      expect(stringSimilarity('abc', '', 'Damerau-Levenshtein')).toBe(0.0);
    });

    it('should return 0% for same letters with different case (case-sensitive)', () => {
      expect(stringSimilarity('ABC', 'abc', 'Levenshtein')).toBe(0.0);
      expect(stringSimilarity('ABC', 'abc', 'Damerau-Levenshtein')).toBe(0.0);
    });

    it('should return 0% for completely different strings (abc vs xyz)', () => {
      expect(stringSimilarity('abc', 'xyz', 'Levenshtein')).toBe(0.0);
      expect(stringSimilarity('abc', 'xyz', 'Damerau-Levenshtein')).toBe(0.0);
    });
  });

  describe('Algorithm comparison: Levenshtein vs Damerau-Levenshtein', () => {
    it('should return 0% for transposition using Levenshtein (ab vs ba)', () => {
      expect(stringSimilarity('ab', 'ba', 'Levenshtein')).toBe(0.0);
    });

    it('should return 50% for transposition using Damerau-Levenshtein (ab vs ba)', () => {
      expect(stringSimilarity('ab', 'ba', 'Damerau-Levenshtein')).toBe(50.0);
    });

    it('should return 50% for near transposition using Levenshtein (acbd vs abcd)', () => {
      expect(stringSimilarity('acbd', 'abcd', 'Levenshtein')).toBe(50.0);
    });

    it('should return 75% for near transposition using Damerau-Levenshtein (acbd vs abcd)', () => {
      expect(stringSimilarity('acbd', 'abcd', 'Damerau-Levenshtein')).toBe(75.0);
    });

    it('should return 75% for single insertion using Levenshtein (abc vs abcd)', () => {
      expect(stringSimilarity('abc', 'abcd', 'Levenshtein')).toBe(75.0);
    });

    it('should return 75% for single deletion using Levenshtein (abcd vs abc)', () => {
      expect(stringSimilarity('abcd', 'abc', 'Levenshtein')).toBe(75.0);
    });
  });
});
