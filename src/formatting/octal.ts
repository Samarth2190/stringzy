/**
 * Converts a decimal number to its octal (base-8) string representation.
 *
 * Supports negative numbers and an optional "0o" prefix.
 *
 * Examples:
 * 8   → "10"
 * 10  → "12"
 * 255 → "377"
 * 0   → "0"
 *
 * @param {number} num - The decimal number to convert.
 * @param {{ prefix?: boolean }} [options] - Optional formatting options.
 * @returns {string} The octal string representation, optionally prefixed with "0o".
 * @throws {TypeError} If the input is not a number or is NaN.
 */
export function formatToOctal(
  num: number,
  options?: { prefix?: boolean }
): string {
  if (typeof num !== 'number' || Number.isNaN(num)) {
    throw new TypeError('Input must be a number');
  }

  const includePrefix = options?.prefix === true;

  const isNegative = num < 0;
  const absoluteValue = Math.abs(num);
  const octalCore = absoluteValue.toString(8);

  const prefix = includePrefix ? '0o' : '';
  const signedCore = `${prefix}${octalCore}`;

  return isNegative ? `-${signedCore}` : signedCore;
}
