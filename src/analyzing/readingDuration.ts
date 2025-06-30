import { wordCount } from './wordCount';

/**
 * Calculates the estimated reading duration for a given text based on an average reading speed.
 *
 * The default reading speed is set to 230 words per minute, which is derived from various research studies.
 *
 * @param {string} text - The text for which the reading duration is to be calculated.
 * @param {number} [readingSpeed=230] - The reading speed in words per minute. Defaults to 230.
 * @returns {number} - The estimated reading duration in minutes.
 */
export function readingDuration(text: string, readingSpeed: number = 230): number {
  const amountOfWords = wordCount(text);
  return Math.round(amountOfWords / readingSpeed);
}
