/**
 * Checks if one string is a rotation of another.
 *
 * A string `str2` is a rotation of `str1` if it can be obtained by shifting
 * the characters of `str1` in a circular fashion.
 *
 * The check is case-sensitive and supports special characters and numbers.
 *
 * @param {string} str1 - The original string.
 * @param {string} str2 - The string to check if it is a rotation of str1.
 * @returns {boolean} True if str2 is a rotation of str1, otherwise false.
 * @throws {TypeError} If either input is not a string.
 *
 * @example
 * checkStringRotations("abcd", "cdab"); // true
 *
 * @example
 * checkStringRotations("abc", "acb"); // false
 *
 * @example
 * checkStringRotations("hello", "ohell"); // true
 *
 * @example
 * checkStringRotations("", ""); // true
 *
 * @example
 * checkStringRotations("abc", "ab"); // false
 */
export function checkStringRotations(str1: string, str2: string): boolean {
  if (typeof str1 !== 'string' || typeof str2 !== 'string') {
    throw new TypeError('Both inputs must be strings');
  }

  // Edge case: both empty strings
  if (str1 === '' && str2 === '') return true;

  // If lengths differ, they cannot be rotations
  if (str1.length !== str2.length) return false;

  // Concatenate str1 with itself and check if str2 is a substring
  return (str1 + str1).includes(str2);
}
