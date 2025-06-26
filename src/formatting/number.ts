/**
 * Formats a number string with thousand separators.
 *
 * @param num - Input string or number
 * @param thousendsSeperator - The character to use as the separator (`,` or `.`). Default is `,`.
 * @returns A formatted string with thousand separators added.
 *
 * @example
 * formatNumber(1234567);           // "1,234,567"
 */
export function formatNumber(num: string | number, thousendsSeperator: '.' | ',' = ",") {
    const numStr = num.toString();
    return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, thousendsSeperator);
}
