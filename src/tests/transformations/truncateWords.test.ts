/**
 * Truncates a string after a specific number of words
 * @param str Input string
 * @param numWords Maximum number of words to keep
 * @returns Truncated string with ellipsis if truncated
 */
export function truncateWords(str: string, numWords: number): string {
  if (!str) return '';
  if (numWords <= 0) return '';
  
  const words = str.trim().split(/\s+/);
  if (words.length <= numWords) return str;

  return words.slice(0, numWords).join(' ') + '...';
}
