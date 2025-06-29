export function removeDuplicates(text: string): string {
  if (typeof text !== 'string') {
    throw new Error('Input must be a string');
  }
  const wordSet = new Set<string>();
  text.split(' ').forEach((word) => {
    wordSet.add(word);
  });
  return Array.from(wordSet).join(' ');
}
