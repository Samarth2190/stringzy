/**
 * Checks if a given string is empty
 * @param str - Input string
 * @returns True if the string is empty or consists only of whitespace
 * @example
 * isEmpty("");           // true
 * isEmpty("   ");        // true
 * isEmpty("hello");      // false
 */
export function isEmpty(str: string): boolean {
  return str.trim().length === 0;
}
