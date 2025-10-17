/**
 * Converts a given string into proper Title Case.
 *
 * Capitalizes all main words while keeping short articles, conjunctions,
 * and prepositions ("a", "an", "the", "of", "in", "on", "and") lowercase
 * unless they are the first word.
 *
 * Examples:
 * "the lord of the rings" → "The Lord of the Rings"
 * "a tale of two cities" → "A Tale of Two Cities"
 * "gone with the wind" → "Gone With the Wind"
 *
 * @param {string} title - The title string to format.
 * @returns {string} The formatted title string in proper title case.
 * @throws {TypeError} If the input is not a string.
 */
export function formatTitle(title: string): string {
  if (typeof title !== 'string') {
    throw new TypeError('Input must be a string');
  }

  if (title.trim().length === 0) return '';

  // Words to keep lowercase unless first
  const lowercaseWords = ['a', 'an', 'the', 'of', 'in', 'on', 'and'];

  const words = title.split(/\s+/);

  return words
    .map((word, index) => {
      const stripped = word.replace(/[^a-zA-Z]/g, '').toLowerCase();

      // Always capitalize the first word or any not in lowercaseWords
      if (index === 0 || !lowercaseWords.includes(stripped)) {
        // Preserve punctuation (like "Peace!" → "Peace!")
        const firstChar = word.charAt(0).toUpperCase();
        return firstChar + word.slice(1).toLowerCase();
      }

      // Keep small words lowercase
      return word.toLowerCase();
    })
    .join(' ');
}
 