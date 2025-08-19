import { capitalizeWords } from '../../transformations/capitalizeWords';

describe('capitalizeWords', () => {
  it('capitalizes each word', () => {
    expect(capitalizeWords('hello world')).toBe('Hello World');
    expect(capitalizeWords('foo bar baz')).toBe('Foo Bar Baz');
  });

  it('handles empty string', () => {
    expect(capitalizeWords('')).toBe('');
  });

  it('throws if input is not a string', () => {
    expect(() => capitalizeWords(123 as any)).toThrow(/Invalid argument/);
    expect(() => capitalizeWords(null as any)).toThrow(/Invalid argument/);
    expect(() => capitalizeWords(undefined as any)).toThrow(/Invalid argument/);
  });
});
