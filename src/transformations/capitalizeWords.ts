/**
 * Capitalizes the first letter of each word in a string.
 *
 * @param text - Input string
 * @returns A new string with each word's first letter capitalized.
 * @throws {Error} If the input is not a string.
 *
 * @example
 * capitalizeWords("hello world");       // "Hello World"
 */
export function capitalizeWords(text: string): string {
    if (typeof text !== "string") {
        throw new Error("Invalid argument. Expected a string.");
    }
    return text.replace(/\b\w/g, (char) => char.toUpperCase());
}
