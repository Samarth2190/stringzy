/**
 * Checks if a given string is a valid MAC address.
 *
 * Valid MAC addresses consist of six pairs of hexadecimal digits (0-9, A-F)
 * separated either by colons (:) or hyphens (-). Example formats:
 * - "00:1A:2B:3C:4D:5E"
 * - "00-1A-2B-3C-4D-5E"
 *
 * Mixed or missing separators, invalid hex characters, or incorrect lengths
 * are not allowed.
 *
 * @param {string} str - The string to validate as a MAC address.
 * @returns {boolean} `true` if the string is a valid MAC address, otherwise `false`.
 *
 * @example
 * isMacAddress("00:1A:2B:3C:4D:5E"); // true
 *
 * @example
 * isMacAddress("00-1A-2B-3C-4D-5E"); // true
 *
 * @example
 * isMacAddress("001A:2B:3C:4D:5E"); // false (wrong length)
 *
 * @example
 * isMacAddress("00:1G:2B:3C:4D:5E"); // false (invalid hex digit 'G')
 */
export function isMacAddress(str: string): boolean {
  const macRegex = /^([0-9A-Fa-f]{2}([:-])){5}([0-9A-Fa-f]{2})$/;

  // Check regex first
  if (!macRegex.test(str)) return false;

  // Ensure all separators are the same (either all ':' or all '-')
  const separator = str[2];
  const expectedSeparator = separator === ':' ? ':' : '-';

  for (let i = 2; i < str.length; i += 3) {
    if (str[i] !== expectedSeparator) return false;
  }

  return true;
}
