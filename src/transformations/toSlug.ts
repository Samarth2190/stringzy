/**
 * Converts a string into a URL-friendly slug.
 *
 * The conversion process includes:
 * - Converting the string to lowercase.
 * - Trimming whitespace from both ends.
 * - Replacing one or more whitespace characters with a single hyphen (`-`).
 * - Removing all characters except word characters (letters, digits, and underscores) and hyphens.
 *
 * Throws an error if the input is not a string.
 *
 * @param {string} text - The input string to convert into a slug.
 * @returns {string} The URL-friendly slug string.
 * @throws {Error} If the input is not a string.
 *
 * @example
 * toSlug("Hello World!"); // "hello-world"
 *
 * @example
 * toSlug("  This is a test --- "); // "this-is-a-test"
 *
 * @example
 * toSlug("Clean_URL--Slug123"); // "clean_url--slug123"
 */
export function toSlug(text: string): string {
  if (typeof text !== 'string') {
    throw new Error('Invalid argument. Expected a string.');
  }
  return text
    .toLowerCase()
    .trim()
    .replace(/[\s]+/g, '-')
    .replace(/[^\w-]+/g, '');
}
