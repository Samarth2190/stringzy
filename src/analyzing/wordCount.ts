/**
 * Counts the number of words in a given string.
 *
 * @param str - Input string
 * @returns Total number of words in the string.
 * @throws {TypeError} If the input is not a string.
 *
 * @example
 * wordCount("One two three "); // 3
 * wordCount("   ");               // 0
 */
export function wordCount(str: string): number {
    if (typeof str !== "string") {
        throw new TypeError("Input must be a string");
    }

    if (!str.trim()) return 0;
    return str.trim().split(/\s+/).length;
}
