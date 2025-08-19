import { formatNumber } from '../../formatting/number';

describe('formatNumber', () => {
  it('formats number with default separator', () => {
    expect(formatNumber(1234567)).toBe('1,234,567');
  });

  it('formats string number with dot separator', () => {
    expect(formatNumber('1234567', '.')).toBe('1.234.567');
  });

  it('returns single digit as is', () => {
    expect(formatNumber(7)).toBe('7');
  });
});
