/**
 * Converts a given string to PascalCase format.
 *
 * @param text - Input string
 * @returns The PascalCased formatted of the input string.
 *
 * @example
 * pascalCase("hello world");         // "HelloWorld"
 * pascalCase("helloWorldHello");    // "HelloWorldHello"
 */
export function pascalCase(text: string): string {
    if (text == null) return '';
    return text
        .trim()
        .toLowerCase()
        .replace(/[^\w\s]/g, ' ')
        .replace(/_/g, ' ')
        .replace(/\s+/g, ' ')
        .replace(/(^|\s)(.)/g, (_, prefix, character) => character.toUpperCase())
        .replace(/\s/g, '');
}
