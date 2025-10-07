/**
 * Generates all unique combinations (subsequences) of a given string,
 * including the empty string.
 *
 * Handles duplicate characters by ensuring only unique combinations are returned.
 * The order of combinations in the output array is not guaranteed.
 *
 * @param {string} str - The input string to generate combinations from.
 * @returns {string[]} An array containing all unique combinations of the string.
 * @throws {TypeError} If the input is not a string.
 *
 * @example
 * stringCombinations("ab");
 * // ["", "a", "b", "ab"]
 *
 * @example
 * stringCombinations("abc");
 * // ["", "a", "b", "c", "ab", "ac", "bc", "abc"]
 *
 * @example
 * stringCombinations("aab");
 * // ["", "a", "b", "aa", "ab", "aab"]
 *
 * @example
 * stringCombinations("");
 * // [""]
 */
export function stringCombinations(str: string): string[] {
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string');
  }

  const results = new Set<string>();

  function backtrack(start: number, path: string) {
    results.add(path);
    for (let i = start; i < str.length; i++) {
      backtrack(i + 1, path + str[i]);
    }
  }

  backtrack(0, '');
  return Array.from(results);
}
