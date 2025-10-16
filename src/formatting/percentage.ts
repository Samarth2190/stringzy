/**
 * Converts a number into a percentage string with configurable decimal precision.
 *
 * Supports positive, negative, and whole numbers.
 *
 * Examples:
 * 0.567 → "56.70%"
 * 0.567 → "56.7%" (precision = 1)
 * 0.5   → "50%"
 * 1     → "100%"
 * -0.25 → "-25%"
 * 50    → "5000%"
 *
 * @param {number} num - The number to convert into a percentage.
 * @param {number} [precision=2] - The number of decimal places to include.
 * @returns {string} The formatted percentage string.
 * @throws {TypeError} If the input is not a number or precision is not a number.
 */
export function formatPercentage(num: number, precision: number = 2): string {
  if (typeof num !== 'number' || Number.isNaN(num)) {
    throw new TypeError('Input must be a number');
  }

  if (typeof precision !== 'number' || Number.isNaN(precision) || precision < 0) {
    throw new TypeError('Precision must be a non-negative number');
  }

  const percentage = num * 100;
  return `${percentage.toFixed(precision)}%`;
}
