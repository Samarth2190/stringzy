/**
 * Calculates the frequency of each non-space character in a string.
 *
 * This function returns an object mapping each lowercase character (excluding spaces)
 * to the number of times it appears in the input string. The input is case-insensitive,
 * meaning 'A' and 'a' are treated the same. It throws a `TypeError` if the input is not a string.
 *
 * @param {string} str - The string to analyze.
 * @returns {Record<string, number>} An object where keys are characters and values are their counts.
 * @throws {TypeError} If the input is not a string.
 * 
 * @example
 * characterFrequency("Hello World");
 * // Returns: { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }
 *
 * @example
 * characterFrequency("AaBb");
 * // Returns: { a: 2, b: 2 }
 */
export function characterFrequency(str: string): Record<string, number> {
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string');
  }

  const frequency: Record<string, number> = {};
  for (const char of str.toLowerCase()) {
    if (char !== ' ') {
      // Exclude spaces for cleaner analysis
      frequency[char] = (frequency[char] || 0) + 1;
    }
  }

  return frequency;
}
