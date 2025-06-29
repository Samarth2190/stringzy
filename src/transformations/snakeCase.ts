/**
 * Converts a given string to snake_case format.
 *
 * @param text - Input string
 * @returns The snake_cased formatted of the input string.
 *
 * @example
 * snakeCase("hello world");             // "hello_world"
 * snakeCase("Hello-World--");           // "hello_world"
 */
export function snakeCase(text: string): string {
    if (text == null) return '';
    return text
        .trim()
        .replace(/[\s-]+/g, '_')
        .replace(/([a-z])([A-Z])/g, '$1_$2')
        .replace(/[^\w_]/g, '_')
        .toLowerCase()
        .replace(/_+/g, '_')
        .replace(/^_+|_+$/g, '');
}
