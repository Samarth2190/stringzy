/**
 * Checks if a given string is a valid slug.
 *
 * A valid slug:
 * - Contains only lowercase letters (`a-z`), numbers (`0-9`), and hyphens (`-`).
 * - Does not start or end with a hyphen.
 * - Does not contain consecutive hyphens.
 * - Is not an empty string.
 *
 * @param {string} str - The string to validate as a slug.
 * @returns {boolean} `true` if the string is a valid slug, otherwise `false`.
 *
 * @example
 * isSlug("valid-slug-123"); // true
 *
 * @example
 * isSlug("Invalid-Slug"); // false (uppercase letters)
 *
 * @example
 * isSlug("-starts-with-hyphen"); // false
 *
 * @example
 * isSlug("ends-with-hyphen-"); // false
 *
 * @example
 * isSlug("double--hyphen"); // false
 */
export function isSlug(str: string): boolean {
  if (typeof str !== 'string' || str.length === 0) {
    return false;
  }
  const slugRegex = /^[a-z0-9]+(-[a-z0-9]+)*$/;
  return slugRegex.test(str);
}
