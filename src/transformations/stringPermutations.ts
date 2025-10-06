/**
 * Generates all unique permutations of a given string.
 *
 * Handles repeated characters by ensuring only unique permutations
 * are included in the result. The order of permutations is not guaranteed.
 *
 * @param {string} str - The input string to generate permutations for.
 * @returns {string[]} An array of unique permutations of the input string.
 * @throws {TypeError} If the input is not a string.
 *
 * @example
 * stringPermutations("ab");
 * // ["ab", "ba"]
 *
 * @example
 * stringPermutations("abc");
 * // ["abc", "acb", "bac", "bca", "cab", "cba"]
 *
 * @example
 * stringPermutations("aab");
 * // ["aab", "aba", "baa"]
 *
 * @example
 * stringPermutations("");
 * // [""]
 *
 * @example
 * stringPermutations("a");
 * // ["a"]
 */
export function stringPermutations(str: string): string[] {
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string');
  }

  if (str.length === 0) return [''];

  const results = new Set<string>();

  const permute = (prefix: string, remaining: string) => {
    if (remaining.length === 0) {
      results.add(prefix);
    } else {
      for (let i = 0; i < remaining.length; i++) {
        permute(prefix + remaining[i], remaining.slice(0, i) + remaining.slice(i + 1));
      }
    }
  };

  permute('', str);

  return Array.from(results);
}
