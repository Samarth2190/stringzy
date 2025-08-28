import { kebabCase } from '../../transformations/kebabCase';

describe('kebabCase', () => {
  it('converts text to kebab-case', () => {
    expect(kebabCase('hello world')).toBe('hello-world');
  });

  it('handles camelCase', () => {
    expect(kebabCase('helloWorld')).toBe('hello-world');
  });

  it('returns empty string for null', () => {
    expect(kebabCase(null as any)).toBe('');
  });
});
