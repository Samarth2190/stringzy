/**
 * Converts a given string to PascalCase format.
 *
 * The conversion process includes:
 * - Trimming whitespace from both ends.
 * - Converting all characters to lowercase.
 * - Replacing non-word characters and underscores with spaces.
 * - Collapsing multiple spaces into a single space.
 * - Capitalizing the first letter of each word.
 * - Removing all spaces to produce the PascalCase output.
 *
 * If the input is `null` or `undefined`, an empty string is returned.
 *
 * @param {string} text - The input string to convert.
 * @returns {string} The PascalCase formatted string.
 *
 * @example
 * pascalCase("hello world"); // "HelloWorld"
 *
 * @example
 * pascalCase("convert_to-pascal.case"); // "ConvertToPascalCase"
 *
 * @example
 * pascalCase("  multiple   spaces  here "); // "MultipleSpacesHere"
 */
export function pascalCase(text: string): string {
  if (text == null) return '';
  return text
    .trim()
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .replace(/_/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/(^|\s)(.)/g, (_, prefix, character) => character.toUpperCase())
    .replace(/\s/g, '');
}
