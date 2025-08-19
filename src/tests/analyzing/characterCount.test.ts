import { characterCount } from '../../analyzing/characterCount';

describe('characterCount', () => {
  it('returns length of string', () => {
    expect(characterCount('hello')).toBe(5);
  });

  it('returns 0 for empty string', () => {
    expect(characterCount('')).toBe(0);
  });

  it('throws if input is not a string', () => {
    expect(() => characterCount(123 as any)).toThrow(/Input must be a string/);
  });
});
