/**
 * Removes unnecessary whitespace from a string.
 * This includes leading/trailing spaces, multiple consecutive spaces, tabs, and line breaks.
 * The result is a clean, single-spaced string.
 *
 * @param {string} str - The input string to format.
 * @returns {string} The trimmed and normalized string.
 * @throws {TypeError} If the input is not a string.
 */
export function trim(str: string): string {
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string');
  }

  // 1. Trim leading/trailing whitespace (including newlines/tabs)
  // 2. Replace multiple internal whitespace chars (including \n, \t) with a single space
  return str.trim().replace(/\s+/g, ' ');
} 