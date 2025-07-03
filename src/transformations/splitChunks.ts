/**
 * Creates chunks of string based on a given chunk size
 * @param text - Input string
 * @param Number - Size of the chunk. Must be a positive integer. Defaults to 1.
 * @returns An array of all the chunks created from the string based on the specified chunk size.
 * @throws Error if input text is not a string or chunk size is not a positive integer.
 */
export function splitChunks(text: string, chunkSize: Number = 1): string[] {
  if (typeof text !== 'string') {
    throw new Error('Input text must be a string');
  }
  if (typeof chunkSize !== 'number' || !Number.isInteger(chunkSize) || chunkSize < 1) {
    throw new Error('chunkSize must be a natural number (1, 2, 3, ...)');
  }

  const len = text.length;
  const chunks = [];
  for (let i = 0; i < len; i += chunkSize) {
    chunks.push(text.slice(i, i + chunkSize));
  }
  return chunks;
}
