/**
 * Converts a given string into camelCase format.
 *
 * This function normalizes the input by:
 * - Converting it to lowercase
 * - Removing special characters (except alphanumeric and underscores)
 * - Replacing underscores and multiple spaces with single spaces
 * - Capitalizing each word except the first
 * - Removing all spaces to form a camelCased result
 *
 * If the input is `null` or `undefined`, an empty string is returned.
 *
 * @param {string} text - The input string to convert.
 * @returns {string} The camelCased version of the input string.
 *
 * @example
 * camelCase("Hello world"); // "helloWorld"
 *
 * @example
 * camelCase("  convert_to-camel case!! "); // "convertToCamelCase"
 *
 * @example
 * camelCase(""); // ""
 */
export function camelCase(text: string): string {
  if (text == null) return '';
  return text
    .trim()
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .replace(/_/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/\s(.)/g, (_, character) => character.toUpperCase())
    .replace(/^(.)/, (_, character) => character.toLowerCase());
}
