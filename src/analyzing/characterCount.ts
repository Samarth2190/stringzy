/**
 * Returns the number of characters in a given string.
 *
 * This function counts all characters in the string, including whitespace,
 * punctuation, and special characters. It throws a `TypeError` if the input is not a string.
 *
 * @param {string} str - The string whose characters will be counted.
 * @returns {number} The number of characters in the input string.
 * @throws {TypeError} If the input is not of type string.
 * 
 * @example
 * characterCount("Hello, world!"); // 13
 * 
 * @example
 * characterCount("  ");            // 2
 * 
 * @example
 * characterCount("");              // 0
 */
export function characterCount(str: string): number {
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string');
  }

  return str.length;
}
