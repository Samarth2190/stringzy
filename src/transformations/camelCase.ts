/**
 * Converts a given string to camelCase format.
 *
 * @param text - Input string
 * @returns The camelCase formatted of the input string.
 *
 * @example
 * camelCase("hello world");        // "helloWorld"
 * camelCase("Camel CASE test");    // "camelCaseTest"
 */
export function camelCase(text: string): string {
    if (text == null) return '';
    return text
        .trim()
        .toLowerCase()
        .replace(/[^\w\s]/g, ' ')
        .replace(/_/g, ' ')
        .replace(/\s+/g, ' ')
        .replace(/\s(.)/g, (_, character) => character.toUpperCase())
        .replace(/^(.)/, (_, character) => character.toLowerCase());
}
