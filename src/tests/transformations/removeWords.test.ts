import { removeWords } from '../../transformations/removeWords';

describe('removeWords', () => {
  it('removes a single word', () => {
    expect(removeWords('hello world', 'world')).toBe('hello');
  });

  it('removes multiple words', () => {
    expect(removeWords('foo bar baz', ['bar', 'baz'])).toBe('foo');
  });

  it('returns empty string for empty input', () => {
    expect(removeWords('', 'foo')).toBe('');
  });

  it('throws if input is not a string', () => {
    expect(() => removeWords(123 as any, 'foo')).toThrow(/First parameter must be a string/);
  });

  it('throws if wordsToRemove is not string or array', () => {
    expect(() => removeWords('foo', 123 as any)).toThrow(
      /Second parameter must be a string or an array/
    );
  });
});
