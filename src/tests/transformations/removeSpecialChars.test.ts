import { removeSpecialChars } from '../../transformations/removeSpecialChars';

describe('removeSpecialChars', () => {
  it('removes special characters', () => {
    expect(removeSpecialChars('hello@world!')).toBe('helloworld');
  });

  it('replaces special characters with custom string', () => {
    expect(removeSpecialChars('hello@world!', '-')).toBe('hello-world-');
  });

  it('throws if input is not a string', () => {
    expect(() => removeSpecialChars(123 as any)).toThrow(/Invalid argument/);
  });

  it('throws if replacement is not a string', () => {
    expect(() => removeSpecialChars('abc', 123 as any)).toThrow(/Replacement must be a string/);
  });
});