/**
 * Removes specified word(s) from a given string.
 *
 * The function accepts either a single word as a string or an array of words to remove.
 * It removes whole word matches case-insensitively, preserving spacing by collapsing
 * multiple spaces into a single space and trimming the result.
 *
 * Throws `TypeError` if inputs are invalid or missing.
 *
 * @param {string} str - The input string from which words will be removed.
 * @param {string | string[]} wordsToRemove - A word or array of words to remove from the input string.
 * @returns {string} The string after removing the specified words.
 * @throws {TypeError} If `str` is null, undefined, or not a string.
 * @throws {TypeError} If `wordsToRemove` is null, undefined, or not a string or array of strings.
 *
 * @example
 * removeWords("The quick brown fox jumps", "quick");
 * // "The brown fox jumps"
 *
 * @example
 * removeWords("The quick brown fox jumps over the lazy dog", ["quick", "lazy"]);
 * // "The brown fox jumps over the dog"
 *
 * @example
 * removeWords("Hello world", "world");
 * // "Hello"
 */
export function removeWords(str: string, wordsToRemove: string | string[]): string {
  if (str === null || str === undefined) {
    throw new TypeError('Input string cannot be null or undefined');
  }
  if (typeof str !== 'string') {
    throw new TypeError('First parameter must be a string');
  }
  if (wordsToRemove === null || wordsToRemove === undefined) {
    throw new TypeError('Words to remove cannot be null or undefined');
  }
  if (typeof wordsToRemove !== 'string' && !Array.isArray(wordsToRemove)) {
    throw new TypeError('Second parameter must be a string or an array of strings');
  }
  if (str === '') {
    return '';
  }
  const wordsArray = Array.isArray(wordsToRemove) ? wordsToRemove : [wordsToRemove];
  const regex = new RegExp(`\\b(${wordsArray.join('|')})\\b`, 'gi');
  return str.replace(regex, '').replace(/\s+/g, ' ').trim();
}
