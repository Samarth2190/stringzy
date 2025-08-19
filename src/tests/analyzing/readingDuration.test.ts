import { readingDuration } from '../../analyzing/readingDuration';

describe('readingDuration', () => {
  const testCases = [
    { text: '', expectedDuration: 0 }, // Empty string
    { text: 'This is a short text', expectedDuration: 0 }, // 5 words
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      expectedDuration: 0, // 19 words
    },
    { text: '   This   text   has   extra   spaces   ', expectedDuration: 0 }, // 6 words
    { text: 'Word', expectedDuration: 0 }, // 1 word
    {
      text: 'A longer text with exactly twenty-three words to test the calculation properly.',
      expectedDuration: 0, // 23 words
    },
    {
      text: 'This text contains fifty words. It is designed to test the reading duration function with a larger input. The function should calculate the duration accurately based on the average reading speed.',
      expectedDuration: 0, // 50 words
    },
    {
      text: Array(9999).fill('Word').join(' '), // 9999 words
      expectedDuration: 43, // 9999 / 230 ≈ 43 minutes
    },
    {
      text: Array(230).fill('Word').join(' '), // 230 words
      expectedDuration: 1,
    },
    {
      text: Array(460).fill('Word').join(' '), // 460 words
      expectedDuration: 2,
    },
  ];

  testCases.forEach(({ text, expectedDuration }) => {
    it(`returns ${expectedDuration} for text with ${text.split(' ').length} words`, () => {
      expect(readingDuration(text)).toBe(expectedDuration);
    });
  });
});
