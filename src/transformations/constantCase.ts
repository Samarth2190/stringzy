/**
 * Converts a string to constantCase format.
 *
 * @param text - Input string
 * @returns The transformed string in constantCase.
 *
 * @example
 * constantCase("hello world");         // "HELLO_WORLD"
 * constantCase("helloWordHello");    // "HELLO_WORD_HELLO"
 */
export function constantCase(text: string): string {
    if (text == null) return '';
    return text
        .trim()
        .replace(/[\s-]+/g, '_')
        .replace(/([a-z])([A-Z])/g, '$1_$2')
        .replace(/[^\w_]/g, '_')
        .toUpperCase()
        .replace(/_+/g, '_')
        .replace(/^_+|_+$/g, '');
}
