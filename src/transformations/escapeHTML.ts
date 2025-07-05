/**
 * Escapes special HTML characters in a string to their corresponding HTML entities.
 *
 * This function replaces the following characters:
 * - `&` with `&amp;`
 * - `<` with `&lt;`
 * - `>` with `&gt;`
 * - `"` with `&quot;`
 * - `'` with `&#39;`
 *
 * This is useful to prevent HTML injection or XSS attacks when inserting user input into HTML.
 *
 * @param {string} str - The string to escape.
 * @returns {string} The escaped string with HTML entities.
 *
 * @example
 * escapeHtml('<div class="test">Hello & Welcome</div>');
 * // "&lt;div class=&quot;test&quot;&gt;Hello &amp; Welcome&lt;/div&gt;"
 *
 * @example
 * escapeHtml("It's a test!");
 * // "It&#39;s a test!"
 */
export function escapeHtml(str: string): string {
  const htmlEscapes: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };

  return str.replace(/[&<>"']/g, (match) => htmlEscapes[match]);
}
