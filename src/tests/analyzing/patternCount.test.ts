import { patternCount } from '../../analyzing/patternCount';

describe('patternCount', () => {
  it('returns 0 for empty string', () => {
    expect(patternCount('', 'aa')).toBe(0);
  });

  it('returns 0 for empty pattern', () => {
    expect(patternCount('abc', '')).toBe(0);
  });

  it('returns 0 for empty string and empty pattern', () => {
    expect(patternCount('', '')).toBe(0);
  });

  it('returns correct count for single character pattern', () => {
    expect(patternCount('abcabcabc', 'a')).toBe(3);
  });

  it('returns correct count for multi-character pattern', () => {
    expect(patternCount('abcabcabc', 'ab')).toBe(3);
  });

  it('returns correct count for overlapping patterns', () => {
    expect(patternCount('ababababa', 'aba')).toBe(4);
  });

  it('returns correct count for non-overlapping patterns', () => {
    expect(patternCount('abababab', 'ab')).toBe(4);
  });

  it('returns 0 for pattern not found', () => {
    expect(patternCount('abcdefg', 'xyz')).toBe(0);
  });
});
