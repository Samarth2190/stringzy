import { pascalCase } from '../../transformations/pascalCase';

describe('pascalCase', () => {
  it('converts text to PascalCase', () => {
    expect(pascalCase('hello world')).toBe('HelloWorld');
  });

  it('handles empty string', () => {
    expect(pascalCase('')).toBe('');
  });

  it('returns empty string for null', () => {
    expect(pascalCase(null as any)).toBe('');
  });
});
