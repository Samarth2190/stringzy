/**
 * Generates all unique permutations of a given string.
 *
 * Handles repeated characters by ensuring only unique permutations
 * are included in the result. The order of permutations is not guaranteed.
 * 
 * Performance optimized version using iterative approach and efficient
 * character frequency tracking to avoid duplicate permutations.
 *
 * @param {string} str - The input string to generate permutations for.
 * @param {number} [limit] - Optional limit on number of permutations to generate.
 * @returns {string[]} An array of unique permutations of the input string.
 * @throws {TypeError} If the input is not a string.
 * @throws {RangeError} If limit is negative.
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
 * stringPermutations("abcdef", 10);
 * // Returns first 10 permutations
 *
 * @example
 * stringPermutations("");
 * // [""]
 *
 * @example
 * stringPermutations("a");
 * // ["a"]
 */
export function stringPermutations(str: string, limit?: number): string[] {
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string');
  }

  if (limit !== undefined && limit < 0) {
    throw new RangeError('Limit must be non-negative');
  }

  if (str.length === 0) return [''];

  // For small strings, use the original approach for simplicity
  if (str.length <= 6) {
    return generatePermutationsSmall(str, limit);
  }

  // For larger strings, use optimized approach
  return generatePermutationsOptimized(str, limit);
}

/**
 * Generates permutations for small strings (≤6 characters) using recursive approach.
 * This is more memory efficient for small inputs.
 */
function generatePermutationsSmall(str: string, limit?: number): string[] {
  const results = new Set<string>();
  let count = 0;

  const permute = (prefix: string, remaining: string) => {
    if (limit !== undefined && count >= limit) return;
    
    if (remaining.length === 0) {
      results.add(prefix);
      count++;
    } else {
      for (let i = 0; i < remaining.length; i++) {
        if (limit !== undefined && count >= limit) break;
        permute(prefix + remaining[i], remaining.slice(0, i) + remaining.slice(i + 1));
      }
    }
  };

  permute('', str);
  return Array.from(results);
}

/**
 * Generates permutations for larger strings using optimized iterative approach.
 * Uses character frequency tracking to avoid duplicate permutations efficiently.
 */
function generatePermutationsOptimized(str: string, limit?: number): string[] {
  // Count character frequencies
  const charCount = new Map<string, number>();
  for (const char of str) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  const results: string[] = [];
  const chars = Array.from(charCount.keys());
  const counts = chars.map(char => charCount.get(char)!);

  // Use iterative approach with stack to avoid recursion
  const stack: Array<{
    permutation: string;
    remainingCounts: number[];
    depth: number;
  }> = [{
    permutation: '',
    remainingCounts: [...counts],
    depth: 0
  }];

  while (stack.length > 0) {
    if (limit !== undefined && results.length >= limit) break;

    const current = stack.pop()!;
    
    if (current.depth === str.length) {
      results.push(current.permutation);
      continue;
    }

    // Generate next level permutations
    for (let i = 0; i < chars.length; i++) {
      if (current.remainingCounts[i] > 0) {
        const newCounts = [...current.remainingCounts];
        newCounts[i]--;
        
        stack.push({
          permutation: current.permutation + chars[i],
          remainingCounts: newCounts,
          depth: current.depth + 1
        });
      }
    }
  }

  return results;
}

/**
 * Generator function for permutations - yields permutations one at a time.
 * This is the most memory-efficient approach for very large strings.
 * 
 * @param {string} str - The input string to generate permutations for.
 * @yields {string} Each unique permutation.
 * 
 * @example
 * for (const perm of stringPermutationsGenerator("abc")) {
 *   console.log(perm);
 * }
 */
export function* stringPermutationsGenerator(str: string): Generator<string, void, unknown> {
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string');
  }

  if (str.length === 0) {
    yield '';
    return;
  }

  // Count character frequencies
  const charCount = new Map<string, number>();
  for (const char of str) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  const chars = Array.from(charCount.keys());
  const counts = chars.map(char => charCount.get(char)!);

  // Use iterative approach with stack
  const stack: Array<{
    permutation: string;
    remainingCounts: number[];
    depth: number;
  }> = [{
    permutation: '',
    remainingCounts: [...counts],
    depth: 0
  }];

  while (stack.length > 0) {
    const current = stack.pop()!;
    
    if (current.depth === str.length) {
      yield current.permutation;
      continue;
    }

    // Generate next level permutations
    for (let i = 0; i < chars.length; i++) {
      if (current.remainingCounts[i] > 0) {
        const newCounts = [...current.remainingCounts];
        newCounts[i]--;
        
        stack.push({
          permutation: current.permutation + chars[i],
          remainingCounts: newCounts,
          depth: current.depth + 1
        });
      }
    }
  }
}
