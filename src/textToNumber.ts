// src/textToNumber.ts
/**
 * Converts a number written in words (like "five hundred twelve") into digits (512)
 */

const ones: Record<string, number> = {
  zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5,
  six: 6, seven: 7, eight: 8, nine: 9, ten: 10,
  eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15,
  sixteen: 16, seventeen: 17, eighteen: 18, nineteen: 19
};

const tens: Record<string, number> = {
  twenty: 20, thirty: 30, forty: 40, fifty: 50,
  sixty: 60, seventy: 70, eighty: 80, ninety: 90
};

const scales: Record<string, number> = {
  hundred: 100, thousand: 1000, million: 1000000
};

export function textToNumber(text: string): number {
  if (!text || typeof text !== "string") return NaN;

  const words = text
    .toLowerCase()
    .replace(/-/, " ")
    .replace(/ and /g, " ")
    .split(/\s+/);

  let total = 0;
  let current = 0;

  for (const word of words) {
    if (ones[word] !== undefined) {
      current += ones[word];
    } else if (tens[word] !== undefined) {
      current += tens[word];
    } else if (word === "hundred") {
      current *= 100;
    } else if (scales[word] !== undefined) {
      total += current * scales[word];
      current = 0;
    }
  }

  return total + current;
}
