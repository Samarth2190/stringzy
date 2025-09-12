/**
 * Counts the number of times a specific pattern occurs in a given text,
 * including overlapping occurrences.
 *
 * Uses the Knuth-Morris-Pratt (KMP) pattern matching algorithm for efficient searching.
 *
 * @param text - The text to search within
 * @param pattern - The pattern to count
 * @returns The number of times the pattern occurs (including overlapping)
 */
export function patternCount(text: string, pattern: string): number {
  if (!pattern) return 0; // Return 0 for empty pattern

  const prefixFunction = computePrefixFunction(pattern);
  let count = 0;
  let j = 0; // Index for pattern

  for (let i = 0; i < text.length; i++) {
    while (j > 0 && text[i] !== pattern[j]) {
      j = prefixFunction[j - 1]; // fallback in pattern
    }
    if (text[i] === pattern[j]) j++;
    if (j === pattern.length) {
      count++;
      j = prefixFunction[j - 1]; // allow overlapping matches
    }
  }

  return count;
}

/**
 * Computes the prefix function (partial match table) for KMP algorithm.
 *
 * The prefix function stores the length of the longest proper prefix
 * which is also a suffix for each prefix of the pattern.
 *
 * @param pattern - Pattern string
 * @returns Array of prefix lengths
 */
function computePrefixFunction(pattern: string): number[] {
  const prefixFunction: number[] = new Array(pattern.length).fill(0);
  let j = 0;

  for (let i = 1; i < pattern.length; i++) {
    while (j > 0 && pattern[i] !== pattern[j]) {
      j = prefixFunction[j - 1]; // fallback
    }
    if (pattern[i] === pattern[j]) j++;
    prefixFunction[i] = j;
  }

  return prefixFunction;
}
