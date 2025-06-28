/**
 * Checks if a given string is a valid email address.
 *
 * Uses a regular expression to verify the format: it must contain
 * one "@" symbol, no spaces, and at least one dot after the "@"
 * (e.g., "example@domain.com").
 *
 * @param {string} str - The string to be checked.
 * @returns {boolean} True if the string is a valid email address, false otherwise.
 */

export function isEmail(str: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(str);
}
