/**
 * Counts the number of words in a given string.
 *
 * Words are defined as sequences of non-whitespace characters separated by one or more
 * whitespace characters (spaces, tabs, newlines, etc.). Leading and trailing whitespace
 * is trimmed before counting.
 *
 * Throws a `TypeError` if the input is not a string.
 *
 * @param {string} str - The string to analyze.
 * @returns {number} The number of words in the input string.
 * @throws {TypeError} If the input is not a string.
 *
 * @example
 * wordCount("Hello world"); // 2
 *
 * @example
 * wordCount("  This  is   a test\nwith multiple lines "); // 7
 *
 * @example
 * wordCount("     "); // 0
 */
export function wordCount(str: string): number {
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string');
  }

  if (!str.trim()) return 0;
  return str.trim().split(/\s+/).length;
}
