import { initials } from '../../transformations/initials';

describe('initials', () => {
  it('returns initials for each word', () => {
    expect(initials('hello world')).toBe('hw');
  });

  it('limits initials if limit is set', () => {
    expect(initials('foo bar baz', 2)).toBe('fb');
  });

  it('returns empty string for empty input', () => {
    expect(initials('', 2)).toBe('');
  });

  it('throws if input is not a string', () => {
    expect(() => initials(123 as any)).toThrow(/Input must be a string/);
  });

  it('throws if limit is negative', () => {
    expect(() => initials('foo bar', -1)).toThrow(/Limit must be a non-negative number/);
  });
});
