import { snakeCase } from '../../transformations/snakeCase';

describe('snakeCase', () => {
  it('converts text to snake_case', () => {
    expect(snakeCase('hello world')).toBe('hello_world');
  });

  it('handles camelCase', () => {
    expect(snakeCase('helloWorld')).toBe('hello_world');
  });

  it('returns empty string for null', () => {
    expect(snakeCase(null as any)).toBe('');
  });
});
