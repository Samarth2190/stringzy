/**
 * Checks if the input string is a valid hex color (e.g., "#fff", "#ffffff", "fff", "ffffff").
 *
 * @param color - The string to validate.
 * @returns True if the string is a valid hex color, false otherwise.
 */
export function isHexColor(text: string): boolean {
  if (typeof text !== 'string' || text.length === 0) {
    return false;
  }
  return /^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(text.trim());
}
