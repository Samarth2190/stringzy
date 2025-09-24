import { functionWordCount } from './functionWordCount';
import { wordCount } from './wordCount';

/**
 * Counts the number of content words in a given text.
 *
 * Content words are words that carry lexical meaning (nouns, verbs, adjectives, adverbs),
 * excluding function words such as prepositions, pronouns, and articles.
 *
 * @param {string} text - The text to analyze.
 * @returns {number} The count of content words in the text.
 * @throws {TypeError} If the input is not a string.
 */
export function contentWordCount(text: string): number {
  if (typeof text !== 'string') {
    throw new TypeError('Input must be a string');
  }

  const totalWords = wordCount(text);
  const functionWords = functionWordCount(text);

  return totalWords - functionWords;
}
