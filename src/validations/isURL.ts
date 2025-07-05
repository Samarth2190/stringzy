/**
 * Checks if a given string is a valid URL.
 *
 * Uses the built-in `URL` constructor to attempt parsing the input string.
 * Returns `true` if the string is a valid URL, otherwise `false`.
 *
 * @param {string} str - The string to validate as a URL.
 * @returns {boolean} `true` if the string is a valid URL, otherwise `false`.
 *
 * @example
 * isURL("https://www.example.com"); // true
 *
 * @example
 * isURL("ftp://ftp.example.com/resource.txt"); // true
 *
 * @example
 * isURL("not a url"); // false
 *
 * @example
 * isURL("http:/invalid-url"); // false
 */
export function isURL(str: string): boolean {
  try {
    new URL(str);
    return true;
  } catch {
    return false;
  }
}
