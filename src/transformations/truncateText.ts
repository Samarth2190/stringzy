export function truncateText(text: string, maxLength: number, suffix: string = '...'): string {
  if (typeof text !== 'string') {
    throw new Error('Input text must be a string.');
  }
  if (typeof maxLength !== 'number' || maxLength < 0) {
    throw new Error('maxLength must be a non-negative number.');
  }
  if (typeof suffix !== 'string') {
    throw new Error('Suffix must be a string.');
  }

  if (text.length <= maxLength) {
    return text;
  }

  const adjustedLength = maxLength - suffix.length;
  return text.slice(0, adjustedLength > 0 ? adjustedLength : 0) + suffix;
}
