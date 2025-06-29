/**
 * Capitalizes the first letter of each word in a string.
 *
 * @param str - Input string
 * @returns A new string with each word capitalized.
 * @throws {TypeError} If the input is not a string.
 *
 * @example
 * capitalize("hello world");         // "Hello World"
 */
export function capitalize(str: string): string {
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string');
  }
  
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}
