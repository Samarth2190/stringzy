import { isEmpty } from '../../validations/isEmpty';

describe('isEmpty', () => {
  it('returns true for empty string', () => {
    expect(isEmpty('')).toBe(true);
  });

  it('returns true for whitespace string', () => {
    expect(isEmpty('   ')).toBe(true);
  });

  it('returns false for non-empty string', () => {
    expect(isEmpty('foo')).toBe(false);
  });
});
