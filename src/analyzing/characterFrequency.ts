export function characterFrequency(str: string): Record<string, number> {
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string');
  }

  const frequency: Record<string, number> = {};
  for (const char of str.toLowerCase()) {
    if (char !== ' ') {
      // Exclude spaces for cleaner analysis
      frequency[char] = (frequency[char] || 0) + 1;
    }
  }

  return frequency;
}
