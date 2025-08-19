import { maskSegment } from '../../transformations/maskSegment';

describe('maskSegment', () => {
  it('masks the string correctly', () => {
    expect(maskSegment('1234567890', 2, 6)).toBe('12****7890');
  });

  it('masks full string if entire range is selected', () => {
    expect(maskSegment('secret', 0, 6)).toBe('******');
  });

  it('supports custom mask character', () => {
    expect(maskSegment('abcdef', 1, 4, '#')).toBe('a###ef');
  });

  it('throws on invalid range', () => {
    expect(() => maskSegment('abc', 2, 1)).toThrow();
    expect(() => maskSegment('abc', -1, 2)).toThrow();
    expect(() => maskSegment('abc', 0, 4)).toThrow();
  });

  it('throws if maskChar is more than one character', () => {
    expect(() => maskSegment('abc', 0, 2, '**')).toThrow();
  });

  it('handles empty string', () => {
    expect(() => maskSegment('', 0, 1)).toThrow();
  });
});
