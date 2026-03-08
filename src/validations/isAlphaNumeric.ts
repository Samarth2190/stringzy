/**
 * Checks whether the given string is alphanumeric.
 *
 * The check ensures that the string contains only
 * letters (a-z, A-Z) and digits (0-9).
 *
 * @param {string} str - The input string to check.
 * @returns {boolean} True if the input is alphanumeric, false otherwise.
 * @throws {TypeError} If the input is not a string.
 */
export function isAlphaNumeric(str: string): boolean {
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string');
  }

  if (str.length === 0) {
    return false;
  }

  return /^[a-z0-9]+$/i.test(str);
}
