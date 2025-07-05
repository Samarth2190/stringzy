/**
 * Converts a given string to CONSTANT_CASE format.
 *
 * The transformation includes:
 * - Trimming whitespace from both ends
 * - Replacing spaces and hyphens with underscores
 * - Inserting underscores between lowercase and uppercase letter boundaries (e.g., `fooBar` → `FOO_BAR`)
 * - Replacing all non-word characters with underscores
 * - Converting the entire string to uppercase
 * - Collapsing multiple underscores into one
 * - Removing leading and trailing underscores
 *
 * If the input is `null` or `undefined`, it returns an empty string.
 *
 * @param {string} text - The input string to convert.
 * @returns {string} The transformed CONSTANT_CASE string.
 *
 * @example
 * constantCase("hello world"); // "HELLO_WORLD"
 *
 * @example
 * constantCase("camelCaseText"); // "CAMEL_CASE_TEXT"
 *
 * @example
 * constantCase("  convert-to_CONSTANT.case!  "); // "CONVERT_TO_CONSTANT_CASE"
 */
export function constantCase(text: string): string {
  if (text == null) return '';
  return text
    .trim()
    .replace(/[\s-]+/g, '_')
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .replace(/[^\w_]/g, '_')
    .toUpperCase()
    .replace(/_+/g, '_')
    .replace(/^_+|_+$/g, '');
}
