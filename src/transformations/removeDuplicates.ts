/**
 * Removes duplicate words from a string, preserving the original word order.
 *
 * Splits the input string by spaces, filters out duplicate words,
 * and joins the unique words back into a string separated by spaces.
 *
 * Throws an error if the input is not a string.
 *
 * @param {string} text - The input string from which duplicate words will be removed.
 * @returns {string} A string containing only unique words in their original order.
 * @throws {TypeError} If the input is not a string.
 *
 * @example
 * removeDuplicates("hello world hello"); // "hello world"
 *
 * @example
 * removeDuplicates("this is is a test test"); // "this is a test"
 *
 * @example
 * removeDuplicates(""); // ""
 */
export function removeDuplicates(text: string): string {
  if (typeof text !== 'string') {
    throw new TypeError('Input must be a string');
  }
  const wordSet = new Set<string>();
  text.split(' ').forEach((word) => {
    wordSet.add(word);
  });
  return Array.from(wordSet).join(' ');
}
