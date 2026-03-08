/**
 * Finds occurrences of multiple patterns within a given text using Aho–Corasick algorithm.
 *
 * - Accepts an array of patterns.
 * - Returns all matches of each pattern along with starting indices.
 * - Handles overlapping matches.
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

  interface TrieNode {
    next: Record<string, TrieNode>;
    fail: TrieNode | null;
    output: string[];
  }

  const root: TrieNode = { next: {}, fail: null, output: [] };

  for (const pattern of patterns) {
    let node = root;
    for (const ch of pattern) {
      if (!node.next[ch]) node.next[ch] = { next: {}, fail: null, output: [] };
      node = node.next[ch];
    }
    node.output.push(pattern);
    result[pattern] = [];
  }

  const queue: TrieNode[] = [];

  for (const ch in root.next) {
    const node = root.next[ch];
    node.fail = root;
    queue.push(node);
  }

  while (queue.length) {
    const current = queue.shift()!;
    for (const ch in current.next) {
      const child = current.next[ch];
      let fail = current.fail;

      // Find deepest fail link with the same transition
      while (fail && !fail.next[ch]) {
        fail = fail.fail;
      }

      child.fail = fail ? fail.next[ch] : root;
      child.output = child.output.concat(child.fail.output);
      queue.push(child);
    }
  }

  let node = root;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];

    while (node && !node.next[ch]) {
      node = node.fail!;
    }

    if (!node) {
      node = root;
      continue;
    }

    node = node.next[ch];

    for (const pattern of node.output) {
      result[pattern].push(i - pattern.length + 1);
    }
  }

  return result;
}

