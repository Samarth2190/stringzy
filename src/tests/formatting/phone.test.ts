import { formatPhone } from '../../formatting/phone';

describe('formatPhone', () => {
  it('formats US phone', () => {
    expect(formatPhone('1234567890', 'us')).toBe('(123) 456-7890');
  });

  it('formats international phone', () => {
    expect(formatPhone('911234567890', 'international')).toBe('+91 (123) 456-7890');
  });

  it('formats IN phone (10 digits)', () => {
    expect(formatPhone('9876543210', 'in')).toBe('+91-98765-43210');
  });

  it('formats IN phone (12 digits, starts with 91)', () => {
    expect(formatPhone('919876543210', 'in')).toBe('+91-98765-43210');
  });

  it('returns input if format does not match', () => {
    expect(formatPhone('123', 'us')).toBe('123');
  });
});
