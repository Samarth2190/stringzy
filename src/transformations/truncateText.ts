/**
 * Truncates a string to a specified maximum length and appends a suffix (default is `"..."`).
 *
 * @param text - Input string
 * @param maxLength - The maximum allowed length of the string
 * @param suffix - custom suffix to append if the string is truncated
 * @returns The truncated string, with suffix 
 * @throws {Error} If input types are invalid.
 *
 * @example
 * truncateText("This is a long message", 10);             // "This is..."
 * truncateText("Short text", 20);                         // "Short text"
 * truncateText("Cut me", 4, "~");                         // "C~"
 */
export function truncateText(text: string, maxLength: number, suffix: string = '...'): string {
    if (typeof text !== 'string') {
        throw new Error("Input text must be a string.");
    }
    if (typeof maxLength !== 'number' || maxLength < 0) {
        throw new Error("maxLength must be a non-negative number.");
    }
    if (typeof suffix !== 'string') {
        throw new Error("Suffix must be a string.");
    }

    if (text.length <= maxLength) {
        return text;
    }

    const adjustedLength = maxLength - suffix.length;
    return text.slice(0, adjustedLength > 0 ? adjustedLength : 0) + suffix;
}
