import { titleCase } from '../../transformations/titleCase';

describe('titleCase', () => {
  it('converts text to Title Case', () => {
    expect(titleCase('hello world')).toBe('Hello World');
  });

  it('handles empty string', () => {
    expect(titleCase('')).toBe('');
  });

  it('returns empty string for null', () => {
    expect(titleCase(null as any)).toBe('');
  });
});
