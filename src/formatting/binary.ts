/**
 * Converts a decimal integer to its binary (base-2) string representation.
 *
 * - Supports negative numbers (prefixed with '-')
 * - Optional grouping from the least significant bit for readability
 *
 * Examples:
 * 5   → "101"
 * 10  → "1010"
 * 255 → "11111111"
 * 0   → "0"
 *
 * Grouping examples (from right to left):
 * formatToBinary(255, { group: 4 }) → "1111 1111"
 * formatToBinary(10, { group: 2 })  → "10 10"
 *
 * @param {number} num - The decimal integer to convert.
 * @param {{ group?: number }} [options] - Optional grouping configuration.
 * @returns {string} The binary string representation.
 * @throws {TypeError} If input is not a number, is NaN, or not an integer.
 */
export function formatToBinary(num: number, options?: { group?: number }): string {
  if (typeof num !== 'number' || Number.isNaN(num)) {
    throw new TypeError('Input must be a number');
  }

  if (!Number.isInteger(num)) {
    throw new TypeError('Input must be an integer');
  }

  const isNegative = num < 0;
  const absoluteValue = Math.abs(num);

  // Handle zero explicitly to avoid "-0" or empty strings
  const core = absoluteValue.toString(2);

  const groupSize = options?.group;
  if (groupSize !== undefined) {
    if (
      typeof groupSize !== 'number' ||
      Number.isNaN(groupSize) ||
      !Number.isInteger(groupSize) ||
      groupSize <= 0
    ) {
      throw new TypeError('Group size must be a positive integer');
    }
  }

  const grouped =
    groupSize && core.length > groupSize
      ? core.replace(new RegExp(`\\B(?=(\\d{${groupSize}})+(?!\\d))`, 'g'), ' ')
      : core;

  return isNegative ? `-${grouped}` : grouped;
}


