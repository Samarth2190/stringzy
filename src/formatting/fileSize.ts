/**
 * Converts a number of bytes into a human-readable file size string (B, KB, MB, GB, TB).
 *
 * Supports values from bytes up to terabytes, with automatic unit scaling and correct rounding.
 *
 * Examples:
 * 123 → "123 B"
 * 1024 → "1 KB"
 * 1048576 → "1 MB"
 * 1073741824 → "1 GB"
 * 1572864 → "1.5 MB"
 *
 * @param {number} bytes - The number of bytes to convert.
 * @param {number} [precision=2] - The number of decimal places to include for non-integer conversions.
 * @returns {string} The formatted file size string with units.
 * @throws {TypeError} If the input is not a number or precision is not a valid number.
 */
export function formatFileSize(bytes: number, precision: number = 2): string {
  if (typeof bytes !== 'number' || Number.isNaN(bytes)) {
    throw new TypeError('Input must be a number');
  }

  if (typeof precision !== 'number' || Number.isNaN(precision) || precision < 0) {
    throw new TypeError('Precision must be a non-negative number');
  }

  if (bytes < 0) {
    throw new RangeError('File size cannot be negative');
  }

  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) return `0 B`;

  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  const value = bytes / Math.pow(1024, i);

  // ✅ Fix: trim trailing zeros by converting to number before string
  const rounded =
    value % 1 === 0 ? value.toString() : parseFloat(value.toFixed(precision)).toString();

  return `${rounded} ${units[i]}`;
}
