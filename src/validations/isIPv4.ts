/**
 * Checks whether a given string is a valid IPv4 address.
 *
 * An IPv4 address consists of four numeric segments separated by dots (e.g., "192.168.0.1").
 * Each segment must be a number from 0 to 255 and must not have leading zeros.
 *
 * @param str - Input string
 * @returns True if the string is a valid IPv4 address
 *
 * @example
 * isIPv4("192.168.0.1");     // true
 * isIPv4("192.168.1");       // false
 * isIPv4("abc.def.ghi.jkl"); // false
 */
export function isIPv4(str: string): boolean {
  const parts = str.split('.');
  if (parts.length !== 4) return false;

  return parts.every(part => {
    const num = parseInt(part, 10);
    return !isNaN(num) && num >= 0 && num <= 255 && part === num.toString();
  });
}
