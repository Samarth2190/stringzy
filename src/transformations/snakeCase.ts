/**
 * Converts a given string to snake_case format.
 *
 * The transformation includes:
 * - Trimming whitespace from both ends.
 * - Replacing spaces and hyphens with underscores.
 * - Inserting underscores between lowercase and uppercase letter boundaries (e.g., `fooBar` → `foo_bar`).
 * - Replacing all non-word characters (except underscores) with underscores.
 * - Converting the entire string to lowercase.
 * - Collapsing multiple consecutive underscores into one.
 * - Removing leading and trailing underscores.
 *
 * If the input is `null` or `undefined`, it returns an empty string.
 *
 * @param {string} text - The input string to convert.
 * @returns {string} The snake_case formatted string.
 *
 * @example
 * snakeCase("Hello World"); // "hello_world"
 *
 * @example
 * snakeCase("camelCaseText"); // "camel_case_text"
 *
 * @example
 * snakeCase("  convert-to--snake.case!  "); // "convert_to_snake_case"
 */
export function snakeCase(text: string): string {
  if (text == null) return '';
  return text
    .trim()
    .replace(/[\s-]+/g, '_')
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .replace(/[^\w_]/g, '_')
    .toLowerCase()
    .replace(/_+/g, '_')
    .replace(/^_+|_+$/g, '');
}
