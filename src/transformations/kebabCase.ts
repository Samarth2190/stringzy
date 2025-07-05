/**
 * Converts a given string to kebab-case format.
 *
 * The conversion process includes:
 * - Trimming whitespace from both ends.
 * - Replacing spaces and underscores with hyphens.
 * - Inserting hyphens between lowercase and uppercase letter boundaries (e.g., `fooBar` → `foo-bar`).
 * - Replacing all non-word characters (except hyphens) with hyphens.
 * - Converting the entire string to lowercase.
 * - Collapsing multiple consecutive hyphens into a single one.
 * - Removing leading and trailing hyphens.
 *
 * If the input is `null` or `undefined`, an empty string is returned.
 *
 * @param {string} text - The input string to convert.
 * @returns {string} The kebab-case formatted string.
 *
 * @example
 * kebabCase("Hello World"); // "hello-world"
 *
 * @example
 * kebabCase("camelCaseText"); // "camel-case-text"
 *
 * @example
 * kebabCase("  convert_to--kebab.case!  "); // "convert-to-kebab-case"
 */
export function kebabCase(text: string): string {
  if (text == null) return '';
  return text
    .trim()
    .replace(/[\s_]+/g, '-')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[^\w-]/g, '-')
    .toLowerCase()
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}
