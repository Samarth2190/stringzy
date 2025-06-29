export function capitalize(str: string): string {
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string');
  }

  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}
