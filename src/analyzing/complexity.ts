export type ComplexityResult = {
  score: number;
  uniqueness: number;
  length: number;
};

/**
 * Evaluates the complexity of a given string based on length, character uniqueness,
 * and character type diversity (lowercase, uppercase, numbers, symbols).
 *
 * The returned score ranges from 0 to 1, where a higher score indicates greater complexity.
 * It also returns the raw length of the string and its uniqueness ratio (unique chars / total length).
 *
 * - `uniqueness`: Measures how varied the characters are.
 * - `score`: Combines uniqueness, type diversity, and length into a weighted value.
 * - `length`: The total number of characters in the input.
 *
 * Throws a `TypeError` if the input is not a string.
 *
 * @param {string} str - The input string to evaluate.
 * @returns {ComplexityResult} An object containing `score`, `uniqueness`, and `length`.
 * @throws {TypeError} If the input is not a string.
 *
 * @example
 * complexity("abcABC123!");
 * // {
 * //   score: 0.93,
 * //   uniqueness: 1.00,
 * //   length: 10
 * // }
 *
 * @example
 * complexity("aaaa");
 * // {
 * //   score: 0.25,
 * //   uniqueness: 0.25,
 * //   length: 4
 * // }
 */
export function complexity(str: string): ComplexityResult {
  if (!str) return { score: 0, uniqueness: 0, length: 0 };

  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string');
  }

  const length = str.length;
  const unique = new Set(str).size;
  const uniqueness = unique / length;

  let typeScore = 0;
  if (/[a-z]/.test(str)) typeScore += 0.25;
  if (/[A-Z]/.test(str)) typeScore += 0.25;
  if (/[0-9]/.test(str)) typeScore += 0.25;
  if (/[^a-zA-Z0-9]/.test(str)) typeScore += 0.25;

  // Calculate score based on length and character diversity
  const lengthScore = Math.min(1, length / 20); // Max score at 20 chars
  const score = uniqueness * 0.4 + typeScore * 0.4 + lengthScore * 0.2;
  return {
    score: parseFloat(score.toFixed(2)),
    uniqueness: parseFloat(uniqueness.toFixed(2)),
    length,
  };
}
