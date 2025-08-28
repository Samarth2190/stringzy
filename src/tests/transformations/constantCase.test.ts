import { constantCase } from '../../transformations/constantCase';

describe('constantCase', () => {
  it('converts text to CONSTANT_CASE', () => {
    expect(constantCase('hello world')).toBe('HELLO_WORLD');
  });

  it('handles camelCase', () => {
    expect(constantCase('helloWorld')).toBe('HELLO_WORLD');
  });

  it('returns empty string for null', () => {
    expect(constantCase(null as any)).toBe('');
    expect(constantCase(undefined as any)).toBe('');
  });
});
