export function capitalizeWords(text: string): string {
  if (typeof text !== 'string') {
    throw new Error('Invalid argument. Expected a string.');
  }
  return text.replace(/\b\w/g, (char) => char.toUpperCase());
}
