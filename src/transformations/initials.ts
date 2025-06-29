/**
 * Extracts the initials from a string, with an optional limit on how many initials to return.
 *
 * @param text - Input string
 * @param limit - Maximum number of initials to return
 * @returns A string containing the initials of the input text.
 * @throws {Error} If the input is not a string
 *
 * @example
 * initials("John Doe");            // "JD"
 * initials("John Doe Doe", 2);     // "JD"
 * initials("", 3);                 // ""
 */
export function initials(text: string, limit?: number): string {
    if (typeof text !== "string") {
        throw new Error("Input must be a string");
    }
    if (limit !== undefined && (typeof limit !== "number" || isNaN(limit))) {
        throw new Error("Limit must be a valid number");
    }
    if (limit !== undefined && limit < 0) {
        throw new Error("Limit must be a non-negative number");
    }
    const words = text.trim().split(/\s+/).filter((word) => word.length > 0);
    if (words.length === 0) return "";
    const initialsArray = words.map((word) => word.charAt(0)).slice(0, limit ?? words.length);
    return initialsArray.join("");
}
