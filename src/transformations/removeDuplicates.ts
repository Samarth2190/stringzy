/**
 * Removes duplicate words from a string
 *
 * @param text - Input string
 * @returns A new string containing only unique words, separated by a single space.
 * @throws {Error} If the input is not a string.
 *
 * @example
 * removeDuplicates("one two two three one");
 * "one two three"
 *
 * removeDuplicates("hello world hello");
 * "hello world"
 */
export function removeDuplicates(text: string): string {
    if (typeof text !== "string") {
        throw new Error("Input must be a string");
    }
    const wordSet = new Set<string>();
    text.split(" ").forEach((word) => {
        wordSet.add(word);
    });
    return Array.from(wordSet).join(" ");
}
