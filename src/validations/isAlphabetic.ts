/**
 * Checks whether a given string contains only alphabetic characters (A-Z, a-z).
 * 
 *
 * @param {string} str - The input string to check.
 * @returns {boolean} True if the input contains only alphabetic characters, otherwise false.
 * @throws {TypeError} If the input is not a string.
 */
export function isAlphabetic(str: string): boolean {
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string');
  }

  // empty string is not considered alphabetic
  if (str === '') return false;

  // Regular expression to match only alphabetic characters
  return /^[A-Za-z]+$/.test(str);
}
