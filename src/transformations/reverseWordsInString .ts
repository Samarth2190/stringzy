/**
 * Reverses the order of words in a given string while preserving the
 * exact spacing (including multiple spaces) between them.
 *
 * @param {string} str - The input string whose words are to be reversed.
 * @returns {string} The string with the order of words reversed and all original spacing intact.
 * @throws {TypeError} If the input is not a string.
 */
export function reverseWordsInString(str: string): string {
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string');
  }

  // 1. Extract all blocks of non-whitespace characters (the words).
  const words = str.match(/\S+/g) || [];

  // 2. If there are no words (e.g., empty or whitespace-only string), return the original string.
  if (words.length === 0) {
    return str;
  }

  // 3. Extract all blocks of whitespace.
  const spaces = str.match(/\s+/g) || [];

  // 4. Reverse ONLY the array of words.
  const reversedWords = words.reverse();

  // 5. Stitch the reversed words and original spaces back together.
  let result = '';
  const startsWithSpace = /^\s/.test(str);

  if (startsWithSpace) {
    // If the string starts with a space, the pattern is: space, word, space, word...
    for (let i = 0; i < reversedWords.length; i++) {
      result += spaces[i] + reversedWords[i];
    }
    // Append any final trailing space block.
    if (spaces.length > reversedWords.length) {
      result += spaces[spaces.length - 1];
    }
  } else {
    // If the string starts with a word, the pattern is: word, space, word, space...
    for (let i = 0; i < reversedWords.length; i++) {
      result += reversedWords[i];
      if (spaces[i]) {
        result += spaces[i];
      }
    }
  }

  return result;
}