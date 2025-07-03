export function characterCount(str: string): number {
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string');
  }

  return str.length;
}
