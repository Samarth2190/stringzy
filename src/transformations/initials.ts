/**
 * Extracts the initials from a given string.
 *
 * Splits the input text by whitespace, takes the first character of each word,
 * and joins them together. Optionally limits the number of initials returned.
 *
 * Throws an error if the input is not a string or if the `limit` parameter
 * is provided but not a non-negative number.
 *
 * @param {string} text - The input string from which to extract initials.
 * @param {number} [limit] - Optional maximum number of initials to return.
 * @returns {string} A string containing the initials.
 * @throws {TypeError} If `text` is not a string.
 * @throws {Error} If `limit` is provided and is not a non-negative number.
 *
 * @example
 * initials("John Doe"); // "JD"
 *
 * @example
 * initials("John Ronald Reuel Tolkien", 2); // "JR"
 *
 * @example
 * initials(" singleWord "); // "s"
 *
 * @example
 * initials(""); // ""
 */
export function initials(text: string, limit?: number): string {
  if (typeof text !== 'string') {
    throw new TypeError('Input must be a string');
  }
  if (limit !== undefined && (typeof limit !== 'number' || isNaN(limit))) {
    throw new Error('Limit must be a valid number');
  }
  if (limit !== undefined && limit < 0) {
    throw new Error('Limit must be a non-negative number');
  }
  const words = text
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0);
  if (words.length === 0) return '';
  const initialsArray = words.map((word) => word.charAt(0)).slice(0, limit ?? words.length);
  return initialsArray.join('');
}
