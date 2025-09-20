/**
 * Checks whether the second string is a subsequence of the first string.
 *
 * A subsequence means all characters of the second string appear in the first string
 * in the same relative order, but not necessarily consecutively.
 * 
 * Is case sensitive
 *
 * @param {string} str1 - The string to check against.
 * @param {string} str2 - The candidate subsequence.
 * @returns {boolean} True if str2 is a subsequence of str1, otherwise false.
 * @throws {TypeError} If either input is not a string.
 */
export function checkSubsequence(str1: string, str2: string): boolean {
  if (typeof str1 !== "string" || typeof str2 !== "string") {
    throw new TypeError("Both inputs must be strings");
  }

  // empty subsequence is always valid
  if (str2 === "") return true;

  let i = 0; // pointer for str2 (the subsequence)
  let j = 0; // pointer for str1 (the main string)

  while (i < str2.length && j < str1.length) {
    if (str2[i] === str1[j]) {
      i++;
    }
    j++;
  }

  return i === str2.length;
}