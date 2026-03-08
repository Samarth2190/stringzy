/**
 * Converts a string in base 2, 8, or 16 to its decimal (base-10) number.
 *
 * - Supports optional standard prefixes: 0b, 0o, 0x (case-insensitive)
 * - Trims leading/trailing whitespace
 * - Supports uppercase and lowercase characters for hexadecimal
 *
 * Examples:
 * formatToDecimal('1010', { base: 2 }) → 10
 * formatToDecimal('12', { base: 8 })   → 10
 * formatToDecimal('FF', { base: 16 })  → 255
 * formatToDecimal('0xFF', { base: 16 })→ 255
 *
 * @param {string} value - The input string representing a number in the given base.
 * @param {{ base: 2 | 8 | 16 }} options - Options containing the base of the input string.
 * @returns {number} The decimal (base-10) representation.
 * @throws {TypeError} For non-string inputs, unsupported bases, or malformed values.
 */
export function formatToDecimal(value: string, options: { base: 2 | 8 | 16 }): number {
  if (typeof value !== 'string') {
    throw new TypeError('Input must be a string');
  }
  const base = options?.base as number;
  if (base !== 2 && base !== 8 && base !== 16) {
    throw new TypeError('Base must be one of 2, 8, or 16');
  }

  let trimmed = value.trim();
  if (trimmed.length === 0) {
    throw new TypeError('Input must be a non-empty string');
  }

  // Optional sign support; not required by spec but harmless and intuitive
  let isNegative = false;
  if (trimmed.startsWith('+') || trimmed.startsWith('-')) {
    isNegative = trimmed[0] === '-';
    trimmed = trimmed.slice(1);
    if (trimmed.length === 0) {
      throw new TypeError('Malformed numeric string');
    }
  }

  // Strip standard prefixes if present and base matches
  const prefix = trimmed.slice(0, 2).toLowerCase();
  if (prefix === '0b' && base === 2) {
    trimmed = trimmed.slice(2);
  } else if (prefix === '0o' && base === 8) {
    trimmed = trimmed.slice(2);
  } else if (prefix === '0x' && base === 16) {
    trimmed = trimmed.slice(2);
  }

  if (trimmed.length === 0) {
    throw new TypeError('Malformed numeric string');
  }

  // Validate characters for the specified base
  let pattern: RegExp;
  if (base === 2) {
    pattern = /^[01]+$/;
  } else if (base === 8) {
    pattern = /^[0-7]+$/;
  } else {
    pattern = /^[0-9a-fA-F]+$/;
  }
  if (!pattern.test(trimmed)) {
    throw new TypeError('Input contains invalid characters for the specified base');
  }

  const parsed = parseInt(trimmed, base);
  return isNegative ? -parsed : parsed;
}


