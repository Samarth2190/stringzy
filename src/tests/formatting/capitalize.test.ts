import { capitalize } from '../../formatting/capitalize';

describe('capitalize', () => {
  it('capitalizes each word', () => {
    expect(capitalize('hello world')).toBe('Hello World');
  });

  it('handles single word', () => {
    expect(capitalize('foo')).toBe('Foo');
  });

  it('handles empty string', () => {
    expect(capitalize('')).toBe('');
  });

  it('throws if input is not a string', () => {
    expect(() => capitalize(123 as any)).toThrow(/Input must be a string/);
  });
});
