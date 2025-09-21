/**
 * Finds occurrences of multiple patterns within a given text using Rabin–Karp algorithm.
 *
 * - Accepts an array of patterns.
 * - Returns all matches of each pattern along with starting indices.
 * - Handles hash collisions by verifying actual substrings.
 * - Is case sensitive
 *
 * @param {string} text - The text to search within.
 * @param {string[]} patterns - The array of patterns to search for.
 * @returns {Record<string, number[]>} An object mapping each pattern to an array of match indices.
 * @throws {TypeError} If input types are invalid.
 */

export function checkMultiplePatterns(
  text: string,
  patterns: string[]
): Record<string, number[]> {
  if (typeof text !== 'string') {
    throw new TypeError('Text must be a string');
  }
  if (!Array.isArray(patterns) || !patterns.every(p => typeof p === 'string')) {
    throw new TypeError('Patterns must be an array of strings');
  }

  const result: Record<string, number[]> = {};
  if (text.length === 0 || patterns.length === 0) {
    return result;
  }

  const prime = 101; // A prime base for hashing

  const getHash = (str: string, m: number): number => {
    let h = 0;
    for (let i = 0; i < m; i++) {
      h = (h * 256 + str.charCodeAt(i)) % prime;
    }
    return h;
  };

  const recomputeHash = (
    oldHash: number,
    dropped: string,
    added: string,
    m: number
  ): number => {
    let h = (oldHash - dropped.charCodeAt(0) * Math.pow(256, m - 1)) % prime;
    h = (h * 256 + added.charCodeAt(0)) % prime;
    if (h < 0) h += prime;
    return h;
  };

  for (const pattern of patterns) {
    const m = pattern.length;
    result[pattern] = [];
    if (m === 0 || m > text.length) continue;

    const patternHash = getHash(pattern, m);
    let windowHash = getHash(text, m);

    for (let i = 0; i <= text.length - m; i++) {
      if (patternHash === windowHash) {
        // Verify to avoid collision false positives
        if (text.slice(i, i + m) === pattern) {
          result[pattern].push(i);
        }
      }
      if (i < text.length - m) {
        windowHash = recomputeHash(
          windowHash,
          text[i],
          text[i + m],
          m
        );
      }
    }
  }

  return result;
}

