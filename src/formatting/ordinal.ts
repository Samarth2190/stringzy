/**
 * Converts a number into its ordinal string representation (e.g., 1 → "1st", 2 → "2nd").
 *
 * Handles special cases for 11, 12, and 13, which always use "th" regardless of their last digit.
 * Supports both small and large numbers.
 *
 * Examples:
 * 1 → "1st"
 * 2 → "2nd"
 * 3 → "3rd"
 * 4 → "4th"
 * 11 → "11th"
 * 21 → "21st"
 * 113 → "113th"
 *
 * @param {number} num - The number to convert to an ordinal string.
 * @returns {string} The formatted ordinal string (e.g., "21st").
 * @throws {TypeError} If the input is not a number.
 */
export function formatOrdinal(num: number): string {
  if (typeof num !== 'number' || Number.isNaN(num)) {
    throw new TypeError('Input must be a number');
  }

  const absNum = Math.abs(num);

  const lastTwoDigits = absNum % 100;
  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return `${num}th`;
  }

  const lastDigit = absNum % 10;
  switch (lastDigit) {
    case 1:
      return `${num}st`;
    case 2:
      return `${num}nd`;
    case 3:
      return `${num}rd`;
    default:
      return `${num}th`;
  }
}
