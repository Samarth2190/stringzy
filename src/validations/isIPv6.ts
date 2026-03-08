/**
 * Checks if a given string is a valid IPv6 address.
 *
 * Valid IPv6 addresses consist of eight groups of four hexadecimal digits (0-9, a-f, A-F)
 * separated by colons (:). Each group can have 1 to 4 hex digits.
 * Leading zeros are allowed. IPv6 addresses can also use the "::" shorthand once
 * to represent one or more groups of zeros.
 *
 * @param {string} str - The string to validate as an IPv6 address.
 * @returns {boolean} `true` if the string is a valid IPv6 address, otherwise `false`.
 *
 * @example
 * isIPv6("2001:0db8:85a3:0000:0000:8a2e:0370:7334"); // true
 *
 * @example
 * isIPv6("2001:db8:85a3::8a2e:370:7334"); // true (uses shorthand)
 *
 * @example
 * isIPv6("2001:db8:::1"); // false (invalid use of shorthand)
 *
 * @example
 * isIPv6("12345::abcd"); // false (group too long)
 */
export function isIPv6(str: string): boolean {
  const lower = str.toLowerCase();

  if (!/^[0-9a-f:]+$/.test(lower)) return false;

  const parts = lower.split("::");
  if (parts.length > 2) return false;

  const left = parts[0] ? parts[0].split(":") : [];
  const right = parts[1] ? parts[1].split(":") : [];

  // Each part (excluding shorthand) must be 1–4 hex digits
  const validGroup = (g: string) => /^[0-9a-f]{1,4}$/.test(g);

  if (!left.every(validGroup) || !right.every(validGroup)) return false;

  const totalGroups = left.length + right.length;
  if (parts.length === 1)
    return totalGroups === 8;
  else
    return totalGroups < 8;
}
