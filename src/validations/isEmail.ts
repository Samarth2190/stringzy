/**
 * Checks if a given string is a valid email address.
 *
 * @param str Input string
 * @returns True if the input is a valid email format; otherwise, `false`.
 * @example
 * isEmail("user@example.com"); // true
 * isEmail("invalid-email");    // false
 */
export function isEmail(str: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(str);
}
