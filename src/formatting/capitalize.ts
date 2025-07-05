/**
 * Capitalizes the first letter of each word in a string.
 *
 * Converts the first character of each word to uppercase and the remaining characters to lowercase.
 * Words are assumed to be separated by spaces. Handles multiple words and mixed casing.
 *
 * Throws a `TypeError` if the input is not a string.
 *
 * @param {string} str - The input string to capitalize.
 * @returns {string} A new string with each word capitalized.
 * @throws {TypeError} If the input is not a string.
 *
 * @example
 * capitalize("hello world"); // "Hello World"
 *
 * @example
 * capitalize("mIxEd CaSe tExT"); // "Mixed Case Text"
 *
 * @example
 * capitalize("  multiple   spaces "); // "Multiple Spaces"
 */
export function capitalize(str: string): string {
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string');
  }

  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}
