import { toSlug } from '../../transformations/toSlug';

describe('toSlug', () => {
  it('converts text to slug', () => {
    expect(toSlug('Hello World!')).toBe('hello-world');
  });

  it('handles already slugged text', () => {
    expect(toSlug('already-slugged')).toBe('already-slugged');
  });

  it('removes special characters', () => {
    expect(toSlug('foo@bar#baz')).toBe('foobarbaz');
  });

  it('throws if input is not a string', () => {
    expect(() => toSlug(123 as any)).toThrow(/Invalid argument/);
  });
});
