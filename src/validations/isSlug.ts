/**
 * Checks if a given string is a valid slug.
 *
 * @param str - Input string
 * @returns True if the string is a valid slug.
 *
 * @example
 * isSlug("hello-world");      // true
 * isSlug("Hello-World");      // false
 */
export function isSlug(str: string): boolean {
  if (typeof str !== 'string' || str.length === 0) {
    return false;
  }
  const slugRegex = /^[a-z0-9]+(-[a-z0-9]+)*$/;
  return slugRegex.test(str);
}
