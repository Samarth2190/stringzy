/**
 * Converts a string to a slug.
 *
 * @param text - Input string
 * @returns The slugified of the input string.
 * @throws {Error} If the input is not a string.
 *
 * @example
 * toSlug("Hello World!");        // "hello-world"
 * toSlug("  Slug  Generator ");  // "slug-generator"
 */
export function toSlug(text: string): string {
    if (typeof text !== "string") {
        throw new Error("Invalid argument. Expected a string.");
    }
    return text
        .toLowerCase()
        .trim()
        .replace(/[\s]+/g, "-")
        .replace(/[^\w-]+/g, "");
}
