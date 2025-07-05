export type PhoneFormat = 'us' | 'in' | 'international';

/**
 * Formats a phone number string into a readable format based on the given region.
 *
 * Strips all non-digit characters before formatting. Supports formatting for:
 * - `'us'`: U.S. numbers with 10 digits → `(123) 456-7890`
 * - `'in'`: Indian numbers with 10 digits or 12 digits starting with '91' → `+91-12345-67890`
 * - `'international'`: Generic international format assuming last 10 digits are the local number.
 *
 * If the number does not match expected formats, it returns the original input.
 *
 * @param {string} phone - The phone number string to format.
 * @param {PhoneFormat} [format='us'] - The desired formatting style: `'us'`, `'in'`, or `'international'`.
 * @returns {string} The formatted phone number, or the original input if formatting fails.
 *
 * @example
 * formatPhone("1234567890"); // "(123) 456-7890"
 *
 * @example
 * formatPhone("+91 9876543210", "in"); // "+91-98765-43210"
 *
 * @example
 * formatPhone("009199876543210", "international"); // "+0091 (998) 765-43210"
 */
export function formatPhone(phone: string, format: PhoneFormat = 'us'): string {
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
