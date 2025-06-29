export function wordCount(str: string): number {
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string');
  }

  if (!str.trim()) return 0;
  return str.trim().split(/\s+/).length;
}
