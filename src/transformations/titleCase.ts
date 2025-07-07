/**
 * Converts a string to Title Case, capitalizing the first letter of each word.
 *
 * The conversion process includes:
 * - Trimming whitespace from both ends.
 * - Converting the entire string to lowercase.
 * - Replacing non-word characters and underscores with spaces.
 * - Collapsing multiple spaces into a single space.
 * - Capitalizing the first character of each word.
 * - Preserving spaces between words.
 *
 * If the input is `null` or `undefined`, it returns an empty string.
 *
 * @param {string} text - The input string to convert.
 * @returns {string} The Title Case formatted string.
 *
 * @example
 * titleCase("hello world"); // "Hello World"
 *
 * @example
 * titleCase("convert_to-title.case!"); // "Convert To Title Case"
 *
 * @example
 * titleCase("  multiple   spaces here "); // "Multiple Spaces Here"
 */
export function titleCase(text: string): string {
  if (text == null) return '';
  return text
    .trim()
    .toLowerCase()
    .replace(/([^\w\s]|_)/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/(^|\s)(.)/g, (_, prefix, character) => prefix + character.toUpperCase())
    .replace(/\s/g, ' ');
}
