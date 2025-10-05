/**
 * Checks if a given string is a pangram (contains every letter of the English alphabet at least once).
 *
 * The check is case-insensitive, and non-alphabetic characters (numbers, punctuation, spaces)
 * are ignored. An empty string is not considered a pangram.
 *
 * @param {string} str - The input string to validate.
 * @returns {boolean} True if the string is a pangram, otherwise false.
 * @throws {TypeError} If the input is not a string.
 *
 * @example
 * isPangram("The quick brown fox jumps over the lazy dog."); // true
 *
 * @example
 * isPangram("This is not a pangram."); // false
 *
 * @example
 * isPangram("Abcdefghijklmnopqrstuvwxyz"); // true
 */
export function isPanagram(str: string): boolean {
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string');
  }


  if (str === '') return false;


  // Normalize string: lowercase and remove non-letters
  const normalized = str.toLowerCase().replace(/[^a-z]/g, '');


  // Create a set of unique letters
  const uniqueLetters = new Set(normalized);


  // Pangram if it has all 26 letters
  return uniqueLetters.size === 26;
}
