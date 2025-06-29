/**
 * Converts a given string to kebab-case.
 *
 * @param text - Input string
 * @returns The kebab-cased formatted of the input string.
 *
 * @example
 * kebabCase("hello world");           // "hello-world"
 * kebabCase("helloWorldHello");           // "hello-world-hello"
 */
export function kebabCase(text: string): string {
    if (text == null) return '';
    return text
        .trim()
        .replace(/[\s_]+/g, '-')
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/[^\w-]/g, '-')
        .toLowerCase()
        .replace(/-+/g, '-')
        .replace(/^-+|-+$/g, '');
}
