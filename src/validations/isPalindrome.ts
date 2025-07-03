/**
 * Checks whether the given string is a palindrome.
 *
 * The check is case-insensitive and ignores all non-alphanumeric characters.
 *
 * @param {string} str - The input string to check.
 * @returns {boolean} True if the input is a palindrome, false otherwise.
 * @throws {TypeError} If the input is not a string.
 */
export function isPalindrome(str: string): boolean {
	if (typeof str !== 'string') {
	  throw new TypeError('Input must be a string');
	}
  
	const sanitized = str
	  .toLowerCase()
	  .replace(/[^a-z0-9]/gi, '');
  
	return sanitized === sanitized.split('').reverse().join('');
  }
  