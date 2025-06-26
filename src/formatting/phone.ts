
/**
 * Formats a phone number string based on the specified format.
 *
 * @param phone - Input string
 * @param format - formatting style ('us' | 'in' | 'international'). Default is `'us'`.
 * @returns A formatted phone number string
 *
 * @example
 * formatPhone("1234567890", "us");             // "(123) 456-7890"
 * formatPhone("919876543210", "in");           // "+91-98765-43210"
 * formatPhone("+841234567890", "international"); // "+84 (123) 456-7890"
 */

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
