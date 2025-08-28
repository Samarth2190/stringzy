import { removeDuplicates } from '../../transformations/removeDuplicates';

describe('removeDuplicates', () => {
  it('removes duplicate words', () => {
    expect(removeDuplicates('foo bar foo')).toBe('foo bar');
  });

  it('returns input if no duplicates', () => {
    expect(removeDuplicates('foo bar')).toBe('foo bar');
  });

  it('throws if input is not a string', () => {
    expect(() => removeDuplicates(123 as any)).toThrow(/Input must be a string/);
  });
});
