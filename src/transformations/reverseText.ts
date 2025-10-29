/**
 * Reverses the given string character by character
 * @param str Input string
 * @returns Reversed string
 */
export function reverseText(str: string): string {
  if (!str) return '';
  return str.split('').reverse().join('');
}
