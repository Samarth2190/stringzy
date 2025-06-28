/**
 * Removes special characters from a string, optionally replacing them with a given string.
 *
 * @param text - Input string
 * @param replacement - Optional string to replace each special character with. Default is `''`.
 * @returns The cleaned string with special characters removed or replaced.
 * @throws {Error} If the input or replacement is not a string.
 *
 * @example
 * removeSpecialChars("Hello, World!");            // "Hello World"
 * removeSpecialChars("Hello: World", "-");      // "Hello- World"
 */
export function removeSpecialChars(text: string, replacement: string = ''): string {
    if (typeof text !== "string") {
        throw new Error("Invalid argument. Expected a string.");
    }
    if (typeof replacement !== "string") {
        throw new Error("Replacement must be a string.");
    }
    return text.replace(/[^\w\s]/gi, replacement);
}
