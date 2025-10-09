/**
 * Calculates the lexicographic rank of a string among all its unique permutations.
 *
 * The rank is 1-based (i.e., the first permutation has rank 1).
 * Handles strings with duplicate characters correctly by adjusting for repetition.
 *
 * @param {string} str - The input string.
 * @returns {number} The 1-based lexicographic rank of the string.
 * @throws {TypeError} If the input is not a string.
 *
 * @example
 * lexicographicRank("acb"); // 2
 *
 * @example
 * lexicographicRank("string"); // 598
 *
 * @example
 * lexicographicRank("cba"); // 6
 *
 * @example
 * lexicographicRank("aba"); // 2
 *
 * @example
 * lexicographicRank("a"); // 1
 */
export function lexicographicalRank(str: string): number {
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string');
  }
  if (str.length === 0) return 1;

  const factorial = (n: number): number => (n <= 1 ? 1 : n * factorial(n - 1));

  const charCount: Record<string, number> = {};
  for (const ch of str) {
    charCount[ch] = (charCount[ch] || 0) + 1;
  }

  const chars = Object.keys(charCount).sort();

  let rank = 1;
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];

    for (const smaller of chars) {
      if (smaller >= ch) break;

      if (charCount[smaller] > 0) {
        charCount[smaller]--;

        let denom = 1;
        const remaining = str.length - i - 1;
        for (const count of Object.values(charCount)) {
          denom *= factorial(count);
        }

        rank += factorial(remaining) / denom;

        charCount[smaller]++;
      }
    }

    if (charCount[ch] > 0) {
      charCount[ch]--;
    } else {
      break; // shouldn't happen unless str has invalid chars
    }
  }

  return rank;
}
