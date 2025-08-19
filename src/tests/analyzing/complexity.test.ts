import { complexity } from '../../analyzing/complexity';

describe('complexity', () => {
  it('returns 0s for empty string', () => {
    expect(complexity('')).toEqual({ score: 0, uniqueness: 0, length: 0 });
  });

  it('returns correct result for simple string', () => {
    const result = complexity('abc');
    expect(typeof result.score).toBe('number');
    expect(typeof result.uniqueness).toBe('number');
    expect(result.length).toBe(3);
  });

  it('returns correct result for complex string', () => {
    const result = complexity('aA1!aA1!');
    expect(result.score).toBeGreaterThan(0);
    expect(result.uniqueness).toBeGreaterThan(0);
    expect(result.length).toBe(8);
  });

  it('throws if input is not a string', () => {
    expect(() => complexity(123 as any)).toThrow(/Input must be a string/);
  });
});
