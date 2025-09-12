/**
 * Checks whether the given string contains only lowercase alphabetic characters.
 * 
 * - At least one alphabetic character must be present.
 * - Digits, spaces, and special characters are ignored.
 * - If any uppercase alphabetic character is found, it returns false.
 *
 * @param {string} str - The input string to check.
 * @returns {boolean} True if all alphabetic characters are lowercase and at least one exists, false otherwise.
 * @throws {TypeError} If the input is not a string.
 */
export function isLowerCase(str: string): boolean {
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string');
  }

  if (str.length === 0) {
    return false;
  }

  let hasLetter = false;

  for (const char of str) {
    if (/[A-Z]/.test(char)) {
      return false;
    }
    if (/[a-z]/.test(char)) {
      hasLetter = true;
    }
  }

  return hasLetter;
}
