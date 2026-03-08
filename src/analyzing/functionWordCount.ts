/**
 * Counts the number of function words in a given text.
 *
 * Function words are common words (e.g., prepositions, pronouns, conjunctions, articles, etc.)
 * that carry grammatical meaning rather than lexical meaning.
 *
 * @param {string} text - The text to analyze.
 * @returns {number} The count of function words in the text.
 * @throws {TypeError} If the input is not a string.
 */
export function functionWordCount(text: string): number {
  if (typeof text !== 'string') {
    throw new TypeError('Input must be a string');
  }

  const functionWords = new Set([
    'a', 'an', 'the', 'and', 'but', 'or', 'nor', 'so', 'yet',
    'for', 'of', 'in', 'on', 'at', 'by', 'to', 'from', 'with', 'about',
    'as', 'into', 'like', 'through', 'after', 'over', 'between', 'out',
    'against', 'during', 'without', 'before', 'under', 'around', 'among',
    'is', 'am', 'are', 'was', 'were', 'be', 'been', 'being',
    'he', 'she', 'it', 'they', 'we', 'you', 'i', 'me', 'him', 'her',
    'them', 'us', 'my', 'your', 'his', 'their', 'our',
    'this', 'that', 'these', 'those',
    'who', 'whom', 'which', 'what', 'when', 'where', 'why', 'how'
  ]);

  // ✅ Normalize text: lowercase + remove punctuation
  const cleanedText = text.toLowerCase().replace(/[^\w\s]/g, '');

  const words = cleanedText.trim().split(/\s+/);

  return words.filter(word => functionWords.has(word)).length;
}
