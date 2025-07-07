/**
 * Removes special characters from a string, replacing them with a specified string.
 *
 * Special characters are any characters except alphanumeric (`a-z`, `A-Z`, `0-9`) and whitespace.
 * The default replacement is an empty string, effectively removing these characters.
 *
 * Throws an error if the input `text` or `replacement` is not a string.
 *
 * @param {string} text - The input string to process.
 * @param {string} [replacement=''] - The string to replace special characters with.
 * @returns {string} The processed string with special characters replaced.
 * @throws {TypeError} If `text` or `replacement` is not a string.
 *
 * @example
 * removeSpecialChars("Hello, World!"); // "Hello World"
 *
 * @example
 * removeSpecialChars("Special #$% chars", '_'); // "Special ___ chars"
 *
 * @example
 * removeSpecialChars("CleanText123"); // "CleanText123"
 */
export function removeSpecialChars(text: string, replacement: string = ''): string {
  if (typeof text !== 'string') {
    throw new TypeError('Invalid argument. Expected a string.');
  }
  if (typeof replacement !== 'string') {
    throw new TypeError('Replacement must be a string.');
  }
  return text.replace(/[^\w\s]/gi, replacement);
}
