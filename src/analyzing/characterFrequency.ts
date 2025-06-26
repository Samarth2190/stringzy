/**
 * Analyzes and returns the frequency of each character in a string.
 *
 *
 * @param str - Input string
 * @returns An object which keys are characters and values are their frequencies.
 * @throws {TypeError} If the input is not a string.
 *
 * @example
 * characterFrequency("Hello");   { h: 1, e: 1, l: 2, o: 1 }
 * characterFrequency("A A B b"); { a: 2, b: 2 }
 */
export function characterFrequency(str: string): Record<string, number> {
    if (typeof str !== "string") {
        throw new TypeError("Input must be a string");
    }

    const frequency: Record<string, number> = {};
    for (const char of str.toLowerCase()) {
        if (char !== " ") {
            // Exclude spaces for cleaner analysis
            frequency[char] = (frequency[char] || 0) + 1;
        }
    }

    return frequency;
}
