/**
 * Converts a number to scientific (exponential) notation.
 *
 * @param {number} num - The number to convert.
 * @param {object} [options] - Optional formatting settings.
 * @param {number} [options.precision=2] - Number of digits after the decimal point.
 * @param {boolean} [options.uppercase=false] - Whether to use uppercase "E" in the notation.
 * @returns {string} Scientific notation of the number.
 * @throws {TypeError} If input is not a valid number.
 */
export function formatScientific(
  num: number,
  options?: { precision?: number; uppercase?: boolean }
): string {
  if (typeof num !== 'number' || isNaN(num)) {
    throw new TypeError('Input must be a valid number');
  }

  const { precision = 2, uppercase = false } = options || {};

  let scientific = num.toExponential(precision);

  if (uppercase) {
    scientific = scientific.replace('e', 'E');
  }

  return scientific;
}
