/**
 * Counts the number of characters in a given string.
 *
 * @param str - Input string
 * @returns Total number of characters in the string.
 * @throws {TypeError} If the input is not a string.
 *
 * @example
 * characterCount("Hello world");  // 11
 * characterCount("123!@#");       // 6
 */
export function characterCount(str: string): number {
    if (typeof str !== "string") {
        throw new TypeError("Input must be a string");
    }

    return str.length;
}
