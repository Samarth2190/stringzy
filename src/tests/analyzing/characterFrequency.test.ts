import { characterFrequency } from '../../analyzing/characterFrequency';

describe('characterFrequency', () => {
  it('returns frequency of each character', () => {
    expect(characterFrequency('aab')).toEqual({ a: 2, b: 1 });
  });

  it('ignores spaces', () => {
    expect(characterFrequency('a a b')).toEqual({ a: 2, b: 1 });
  });

  it('returns empty object for empty string', () => {
    expect(characterFrequency('')).toEqual({});
  });

  it('throws if input is not a string', () => {
    expect(() => characterFrequency(123 as any)).toThrow(/Input must be a string/);
  });
});
