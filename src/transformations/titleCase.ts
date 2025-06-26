/**
 * Converts a string to Title Case (each word's first letter capitalized).
 *
 * @param text - Input string
 * @returns A string in Title Case format.
 *
 * @example
 * titleCase("hello world");             // "Hello World"
 * titleCase("JAVASCRIPT is awesOME");   // "Javascript Is Awesome"
 */
export function titleCase(text: string): string {
    if (text == null) return '';
    return text
        .trim()
        .toLowerCase()
        .replace(/([^\w\s]|_)/g, ' ')
        .replace(/\s+/g, ' ')
        .replace(/(^|\s)(.)/g, (_, prefix, character) => prefix + character.toUpperCase())
        .replace(/\s/g, ' ');
}
