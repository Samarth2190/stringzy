/**
 * Removes specific word(s) from a string.
 *
 * @param str - Input string
 * @param wordsToRemove - A single word or array of words to remove
 * @returns The formatted string with specified word(s) removed
 * 
 * @throws {Error} If the input string is null/undefined or not a string.
 * @throws {Error} If the words to remove are null/undefined or not a string/array.
 *
 * @example 
 * removeWords("This is a test", "is");                      // "This a test"
 * removeWords("Remove these words now", ["these", "now"]);  // "Remove words"
 * removeWords("one TWO Three", ["two", "three"]);           // "one"
 */
export function removeWords(str: string, wordsToRemove: string | string[]): string {
    if (str === null || str === undefined) {
        throw new Error('Input string cannot be null or undefined');
    }
    if (typeof str !== 'string') {
        throw new Error('First parameter must be a string');
    }
    if (wordsToRemove === null || wordsToRemove === undefined) {
        throw new Error('Words to remove cannot be null or undefined');
    }
    if (typeof wordsToRemove !== 'string' && !Array.isArray(wordsToRemove)) {
        throw new Error('Second parameter must be a string or an array of strings');
    }
    if (str === '') {
        return '';
    }
    const wordsArray = Array.isArray(wordsToRemove) ? wordsToRemove : [wordsToRemove];
    const regex = new RegExp(`\\b(${wordsArray.join('|')})\\b`, 'gi');
    return str.replace(regex, '').replace(/\s+/g, ' ').trim();
}
