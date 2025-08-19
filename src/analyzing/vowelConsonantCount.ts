/**
 * Returns the number of vowels and consonants in a given string.
 *
 * This function counts the number of vowels and consonants in the string, ignoring whitespace, 
 * punctuation, and special characters. It throws a `TypeError` if the input is not a string.
 *
 * @param {string} str - The string whose vowels and consonants will be counted.
 * @returns {{ vowels: number, consonants: number }} An object containing the counts of vowels and consonants.
 * @throws {TypeError} If the input is not of type string
 * 
 * @example
 * vowelConsonantCount("hello");
 * // { vowels: 2, consonants: 3 }
 *
 * @example
 * vowelConsonantCount("stringzy");
 * // { vowels: 1, consonants: 7 }
 */
export function vowelConsonantCount(str: string): { vowels: number, consonants: number } {
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string');
  }

  const vowels = 'aeiouAEIOU';
  let vowelCount = 0;
  let consonantCount = 0;

  for (const char of str) {
    if (vowels.includes(char)) {
      vowelCount++;
    } else if (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') {
      consonantCount++;
    }
  }

  return {vowels: vowelCount, consonants: consonantCount};
}
