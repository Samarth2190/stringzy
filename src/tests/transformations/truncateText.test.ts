import { truncateText } from '../../transformations/truncateText';

describe('truncateText', () => {
  it('returns the original text if shorter than maxLength', () => {
    expect(truncateText('hello', 10)).toBe('hello');
  });

  it('truncates and adds suffix if text is longer', () => {
    expect(truncateText('hello world', 5)).toBe('he...');
  });

  it('truncates and adds custom suffix', () => {
    expect(truncateText('abcdef', 5, '--')).toBe('abc--');
  });

  it('returns only suffix if maxLength < suffix.length', () => {
    expect(truncateText('abcdef', 2)).toBe('...');
  });

  it('throws if text is not a string', () => {
    expect(() => truncateText(123 as any, 5)).toThrow(/Input text must be a string/);
  });

  it('throws if maxLength is negative', () => {
    expect(() => truncateText('abc', -1)).toThrow(/maxLength must be a non-negative number/);
  });

  it('throws if suffix is not a string', () => {
    expect(() => truncateText('abc', 5, 123 as any)).toThrow(/Suffix must be a string/);
  });
});
