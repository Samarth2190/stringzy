/**
 * Formats a credit card number by grouping digits into readable parts.
 *
 * @param {string} cardNumber - The credit card number to format.
 * @returns {string} The formatted credit card number.
 * @throws {TypeError} If the input is not a string.
 */
export function formatCreditCard(cardNumber: string): string {
  if (typeof cardNumber !== 'string') {
    throw new TypeError('Input must be a string');
  }

  // Remove all non-digit characters
  const cleaned = cardNumber.replace(/\D/g, '');

  // Only accept 15 or 16 digit card numbers
  if (cleaned.length !== 15 && cleaned.length !== 16) {
    return '';
  }

  // Format based on length:
  // 16 digits → 4-4-4-4 (Visa, MasterCard)
  if (cleaned.length === 16) {
    return cleaned.replace(/(\d{4})(?=\d)/g, '$1 ').trim();
  }

  // 15 digits → 4-6-5 (AmEx)
  return cleaned.replace(/(\d{4})(\d{6})(\d{5})/, '$1 $2 $3');
}
