export type PhoneFormat = 'us' | 'in' | 'international';

export function formatPhone(phone: string, format: PhoneFormat = 'us') {
  const digits = phone.replace(/\D/g, '');

  if (format === 'us' && digits.length === 10) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  } else if (format === 'international' && digits.length >= 10) {
    const countryCode = digits.slice(0, -10);
    const areaCode = digits.slice(-10, -7);
    const firstPart = digits.slice(-7, -4);
    const lastPart = digits.slice(-4);
    return `+${countryCode} (${areaCode}) ${firstPart}-${lastPart}`;
  } else if (format === 'in') {
    if (digits.length === 10) {
      return `+91-${digits.slice(0, 5)}-${digits.slice(5)}`;
    } else if (digits.length === 12 && digits.startsWith('91')) {
      return `+91-${digits.slice(2, 7)}-${digits.slice(7)}`;
    }
  }

  return phone;
}
