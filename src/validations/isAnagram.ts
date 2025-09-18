/**
 * Checks whether two strings are anagrams of each other.
 *
 * Rules:
 * - Comparison is case-insensitive.
 * - Spaces and punctuation are ignored.
 *
 * @param {string} str1 - The first input string.
 * @param {string} str2 - The second input string.
 * @returns {boolean} True if the inputs are anagrams, otherwise false.
 * @throws {TypeError} If either input is not a string.
 */
export function isAnagram(str1: string, str2: string): boolean {
  if (typeof str1 !== 'string' || typeof str2 !== 'string') {
    throw new TypeError('Both inputs must be strings');
  }

  // Normalize: lowercase, remove spaces & punctuation
  const normalize = (str: string) =>
    str.toLowerCase().replace(/[^a-z0-9]/g, '').split('').sort().join('');

  return normalize(str1) === normalize(str2);
}
