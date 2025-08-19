import { camelCase } from '../../transformations/camelCase';

describe('camelCase', () => {
  it('converts text to camelCase', () => {
    expect(camelCase('hello world')).toBe('helloWorld');
  });

  it('handles empty string', () => {
    expect(camelCase('')).toBe('');
  });

  it('returns empty string for null', () => {
    expect(camelCase(null as any)).toBe('');
  });
});
