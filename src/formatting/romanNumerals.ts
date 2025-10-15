/**
 * Converts a positive integer into its Roman numeral representation.
 *
 * Supports numbers from 1 to 3999 using standard Roman numeral notation.
 * 
 * Examples:
 * 1     → "I"
 * 4     → "IV"
 * 9     → "IX"
 * 58    → "LVIII"
 * 1994  → "MCMXCIV"
 * 2025  → "MMXXV"
 * 3999  → "MMMCMXCIX"
 *
 * @param {number} num - The positive integer to convert (1–3999).
 * @returns {string} The Roman numeral representation of the given number.
 * @throws {RangeError} If the number is less than or equal to 0, or greater than 3999.
 * @throws {TypeError} If the input is not a number.
 */
export function formatRomanNumeral(num: number): string {
  if (typeof num !== 'number' || Number.isNaN(num)) {
    throw new TypeError('Input must be a number');
  }

  if (num <= 0) {
    throw new RangeError('Roman numerals are only defined for positive integers');
  }

  if (num > 3999) {
    throw new RangeError('Roman numerals are supported only up to 3999');
  }

  const values = [
    1000, 900, 500, 400,
    100, 90, 50, 40,
    10, 9, 5, 4, 1
  ];

  const symbols = [
    'M', 'CM', 'D', 'CD',
    'C', 'XC', 'L', 'XL',
    'X', 'IX', 'V', 'IV', 'I'
  ];

  let result = '';
  let i = 0;

  while (num > 0) {
    while (num >= values[i]) {
      result += symbols[i];
      num -= values[i];
    }
    i++;
  }

  return result;
}
