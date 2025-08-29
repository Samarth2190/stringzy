/**
 * Calculates the number of times a specific pattern occurs in a given text, including overlapping occurrences
 *
 * The algorithm used here is based on the Knuth-Morris-Pratt (KMP) pattern matching algorithm for better performance
 *
 * @param {string} text - The text for which we want to count the occurrences of a specific pattern.
 * @param {string} pattern - The pattern to search for within the text.
 * @returns {number} - The number of times the pattern occurs in the text (overlapping).
 */
export function patternCount(text: string, pattern: string): number {
  if (pattern.length === 0) {
    return 0; // No pattern to search for
  }

  const prefixFunction = computePrefixFunction(pattern);
  
  let count = 0;
  let j = 0; // Index for pattern

  for (let i = 0; i < text.length; i++) {
    while (j > 0 && text[i] !== pattern[j]) {
      j = prefixFunction[j - 1];
    }
    if (text[i] === pattern[j]) {
      j++;
    }
    if (j === pattern.length) {
      count++;
      j = prefixFunction[j - 1]; // Allow for overlapping matches
    }
  }

  return count;
}

/**
 * Computes the prefix function (partial match table) for KMP algorithm.
 * @param {string} pattern - The pattern string.
 * @returns {number[]} - The prefix function array.
 */
function computePrefixFunction(pattern: string): number[] {
  const prefixFunction = new Array(pattern.length).fill(0);
  let j = 0;
  for (let i = 1; i < pattern.length; i++) {
    while (j > 0 && pattern[i] !== pattern[j]) {
      j = prefixFunction[j - 1];
    }
    if (pattern[i] === pattern[j]) {
      j++;
    }
    prefixFunction[i] = j;
  }
  return prefixFunction;
}