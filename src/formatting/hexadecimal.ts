/**
 * Converts a decimal number to its hexadecimal (base-16) representation.
 *
 * @param {number} num - The decimal number to convert.
 * @param {object} [options] - Optional formatting options.
 * @param {boolean} [options.prefix=false] - Whether to add "0x" before the result.
 * @param {boolean} [options.lowercase=false] - Whether to return hexadecimal in lowercase.
 * @returns {string} The hexadecimal representation of the number.
 * @throws {TypeError} If the input is not a valid number.
 */
export function formatToHexadecimal(
  num: number,
  options?: { prefix?: boolean; lowercase?: boolean }
): string {
  if (typeof num !== 'number' || isNaN(num)) {
    throw new TypeError('Input must be a valid number');
  }

  const { prefix = false, lowercase = false } = options || {};

  // Convert number to hexadecimal (absolute value first to handle negatives)
  let hex = Math.abs(num).toString(16).toUpperCase();

  if (lowercase) {
    hex = hex.toLowerCase();
  }

  // Add negative sign if original number was negative
  if (num < 0) {
    hex = '-' + hex;
  }

  // Add prefix (0x or -0x) if enabled
  if (prefix) {
    if (hex.startsWith('-')) {
      hex = '-0x' + hex.slice(1);
    } else {
      hex = '0x' + hex;
    }
  }

  return hex;
}
