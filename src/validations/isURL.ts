/**
 * Checks whether a given string is a valid URL.
 *
 * @param str - Input string 
 * @returns True if the string is a valid URL
 */
export function isURL(str: string): boolean {
  try {
    new URL(str);
    return true;
  } catch {
    return false;
  }
}
