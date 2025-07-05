/**
 * Capitalizes the first letter of every word in a given string.
 *
 * A word is identified by word boundaries (`\b`), and only the first character
 * of each word is converted to uppercase. The rest of the characters remain unchanged.
 *
 * Throws an error if the input is not a string.
 *
 * @param {string} text - The input string whose words will be capitalized.
 * @returns {string} A new string with each word's first character in uppercase.
 * @throws {Error} If the input is not a string.
 *
 * @example
 * capitalizeWords("hello world"); // "Hello World"
 *
 * @example
 * capitalizeWords("javaScript is fun!"); // "JavaScript Is Fun!"
 *
 * @example
 * capitalizeWords(""); // ""
 */
export function capitalizeWords(text: string): string {
  if (typeof text !== 'string') {
    throw new Error('Invalid argument. Expected a string.');
  }
  return text.replace(/\b\w/g, (char) => char.toUpperCase());
}
