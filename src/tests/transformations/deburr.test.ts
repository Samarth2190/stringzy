import { deburr } from '../../transformations/deburr';

describe('deburr', () => {
  it('removes accents and diacritics', () => {
    expect(deburr('déjà vu')).toBe('deja vu');
    expect(deburr('Élève')).toBe('Eleve');
    expect(deburr('São Paulo')).toBe('Sao Paulo');
    expect(deburr('über cool')).toBe('uber cool');
  });

  it('returns the original string if no accents present', () => {
    expect(deburr('hello world')).toBe('hello world');
  });

  it('returns empty string if input is empty', () => {
    expect(deburr('')).toBe('');
  });

  it('throws an error if input is not a string', () => {
    expect(() => deburr(123 as any)).toThrow(/Input must be a string/);
    expect(() => deburr(null as any)).toThrow(/Input must be a string/);
    expect(() => deburr(undefined as any)).toThrow(/Input must be a string/);
  });
});
