export function toSlug(text: string): string {
  if (typeof text !== 'string') {
    throw new Error('Invalid argument. Expected a string.');
  }
  return text
    .toLowerCase()
    .trim()
    .replace(/[\s]+/g, '-')
    .replace(/[^\w-]+/g, '');
}
