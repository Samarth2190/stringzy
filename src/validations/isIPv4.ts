/**
 * Checks if a given string is a valid IPv4 address.
 *
 * Valid IPv4 addresses consist of four decimal numbers (0-255) separated by dots.
 * Leading zeros are not allowed (e.g., "01" is invalid).
 *
 * @param {string} str - The string to validate as an IPv4 address.
 * @returns {boolean} `true` if the string is a valid IPv4 address, otherwise `false`.
 *
 * @example
 * isIPv4("192.168.1.1"); // true
 *
 * @example
 * isIPv4("255.255.255.255"); // true
 *
 * @example
 * isIPv4("256.100.50.0"); // false (256 is out of range)
 *
 * @example
 * isIPv4("192.168.1"); // false (not enough parts)
 */
export function isIPv4(str: string): boolean {
  const parts = str.split('.');
  if (parts.length !== 4) return false;

  return parts.every((part) => {
    const num = parseInt(part, 10);
    return !isNaN(num) && num >= 0 && num <= 255 && part === num.toString();
  });
}
