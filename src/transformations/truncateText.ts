/**
 * Truncates a string to a specified maximum length and appends a suffix if truncated.
 *
 * If the text length is less than or equal to `maxLength`, the original text is returned.
 * Otherwise, the text is cut off so that the total length including the suffix does not exceed `maxLength`.
 *
 * Throws a `TypeError` if input types are invalid or if `maxLength` is negative.
 *
 * @param {string} text - The input string to truncate.
 * @param {number} maxLength - The maximum allowed length of the returned string including suffix.
 * @param {string} [suffix='...'] - The string to append if truncation occurs.
 * @returns {string} The truncated string with suffix if applicable.
 * @throws {TypeError} If `text` is not a string.
 * @throws {Error} If `maxLength` is not a non-negative number.
 * @throws {TypeError} If `suffix` is not a string.
 *
 * @example
 * truncateText("Hello World", 8); // "Hello..."
 *
 * @example
 * truncateText("Short text", 20); // "Short text"
 *
 * @example
 * truncateText("Custom suffix example", 10, "---"); // "Custom---"
 */
export function truncateText(text: string, maxLength: number, suffix: string = '...'): string {
  if (typeof text !== 'string') {
    throw new TypeError('Input text must be a string.');
  }
  if (typeof maxLength !== 'number' || maxLength < 0) {
    throw new Error('maxLength must be a non-negative number.');
  }
  if (typeof suffix !== 'string') {
    throw new TypeError('Suffix must be a string.');
  }

  if (text.length <= maxLength) {
    return text;
  }

  const adjustedLength = maxLength - suffix.length;
  return text.slice(0, adjustedLength > 0 ? adjustedLength : 0) + suffix;
}
