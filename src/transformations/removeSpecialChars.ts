export function removeSpecialChars(text: string, replacement: string = ''): string {
  if (typeof text !== 'string') {
    throw new Error('Invalid argument. Expected a string.');
  }
  if (typeof replacement !== 'string') {
    throw new Error('Replacement must be a string.');
  }
  return text.replace(/[^\w\s]/gi, replacement);
}
