/**
 * Escapes special HTML characters in a string to their corresponding HTML entities.
 *
 * This helps prevent issues such as HTML injection or broken markup by safely converting:
 * - `&` to `&amp;`
 * - `<` to `&lt;`
 * - `>` to `&gt;`
 * - `"` to `&quot;`
 * - `'` to `&#39;`
 *
 * @param str - Input string
 * @returns A string with HTML characters escaped
 *
 * @example
 * escapeHtml("<div>Tom & Jerry</div>");    "&lt;div&gt;Tom &amp; Jerry&lt;/div&gt;"
 *
 * escapeHtml(`He said: "It's fine"`);      "He said: &quot;It&#39;s fine&quot;"
 */
export function escapeHtml(str: string): string {
  const htmlEscapes: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };
  
  return str.replace(/[&<>"']/g, (match) => htmlEscapes[match]);
};
