/**
 * Checks whether a given string is empty or consists only of whitespace.
 *
 * Trims the input string and returns true if the resulting length is 0,
 * indicating that the string is either empty or contains only whitespace characters.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string is empty or whitespace only, false otherwise.
 */

export function isEmpty(str: string): boolean {
  return str.trim().length === 0;
}