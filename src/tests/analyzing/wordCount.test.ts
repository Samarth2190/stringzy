import { wordCount } from '../../analyzing/wordCount';

describe('wordCount', () => {
  it('counts words in a string', () => {
    expect(wordCount('hello world')).toBe(2);
  });

  it('returns 0 for empty string', () => {
    expect(wordCount('')).toBe(0);
  });

  it('returns 0 for whitespace string', () => {
    expect(wordCount('   ')).toBe(0);
  });

  it('throws if input is not a string', () => {
    expect(() => wordCount(123 as any)).toThrow(/Input must be a string/);
  });
});
