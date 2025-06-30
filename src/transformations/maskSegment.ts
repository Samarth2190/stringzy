/**
 * Hides a segment of a string by replacing it with a specified character.
 * @param text The input string.
 * @param maskStart The start index of the segment to mask (inclusive). Defaults to 0.
 * @param maskEnd The end index of the segment to mask (exclusive). Defaults to text.length.
 * @param maskChar The character to use for masking. Defaults to '*'.
 * @returns The string with the specified segment masked.
 */

export function maskSegment(
  text: string,
  maskStart: number = 0,
  maskEnd: number = text.length,
  maskChar: string = '*'
): string {
  if (maskStart < 0 || maskEnd > text.length || maskStart >= maskEnd) {
    throw new Error('Invalid mask segment range');
  }

  if (maskChar.length !== 1) {
    throw new Error('Mask character must be a single character');
  }

  if (maskStart === 0 && maskEnd === text.length) {
    return maskChar.repeat(text.length);
  }

  return text.slice(0, maskStart) + maskChar.repeat(maskEnd - maskStart) + text.slice(maskEnd);
}
