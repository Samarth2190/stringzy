/**
 * Formats an array of strings into a human-readable list with proper commas and "and".
 *
 * Supports the Oxford comma for lists of three or more items.
 * Returns an empty string for empty arrays.
 *
 * Examples:
 * ["apples", "bananas", "cherries"] → "apples, bananas, and cherries"
 * ["apples", "bananas"] → "apples and bananas"
 * ["apple"] → "apple"
 * [] → ""
 *
 * @param {string[]} arr - The array of strings to format into a readable list.
 * @returns {string} The formatted human-readable list.
 * @throws {TypeError} If the input is not an array of strings.
 */
export function formatList(arr: string[]): string {
  if (!Array.isArray(arr)) {
    throw new TypeError('Input must be an array');
  }

  if (!arr.every(item => typeof item === 'string')) {
    throw new TypeError('All elements in the array must be strings');
  }

  const len = arr.length;
  if (len === 0) return '';
  if (len === 1) return arr[0];
  if (len === 2) return `${arr[0]} and ${arr[1]}`;

  return `${arr.slice(0, -1).join(', ')}, and ${arr[len - 1]}`;
}
