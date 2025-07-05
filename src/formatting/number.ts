/**
 * Formats a number with a thousands separator.
 *
 * Converts a number or numeric string into a more readable format by inserting the specified
 * thousands separator (either `','` or `'.'`). This function does not round or localize
 * decimals — it only adds the separator between every three digits from the right.
 *
 * The input is first converted to a string before formatting. If the input is not a valid
 * number or numeric string, the output may be incorrect.
 *
 * @param {string | number} num - The number or numeric string to format.
 * @param {'.' | ','} [thousendsSeperator=','] - The character to use as the thousands separator.
 * @returns {string} The formatted string with the separator added.
 *
 * @example
 * formatNumber(1234567); // "1,234,567"
 *
 * @example
 * formatNumber("987654321", '.'); // "987.654.321"
 *
 * @example
 * formatNumber(12345.67); // "12,345.67" (decimals preserved as-is)
 */
export function formatNumber(num: string | number, thousendsSeperator: '.' | ',' = ','): string {
  const numStr = num.toString();
  return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, thousendsSeperator);
}
