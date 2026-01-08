export * from './analyzing';
export * from './formatting';
export * from './transformations';
export * from './validations';

import * as analyzing from './analyzing';
import * as formatting from './formatting';
import * as transformations from './transformations';
import * as validations from './validations';

declare global {
  interface String {
    /* =========================
       Transformations
       ========================= */

    truncateText(maxLength: number, suffix?: string): string;
    toSlug(): string;
    capitalizeWords(): string;
    removeSpecialChars(): string;
    removeWords(words: string[]): string;
    removeDuplicates(): string;
    initials(): string;

    camelCase(): string;
    pascalCase(): string;
    snakeCase(): string;
    kebabCase(): string;
    titleCase(): string;
    constantCase(): string;

    escapeHTML(): string;
    maskSegment(start: number, end: number, maskChar?: string): string;
    deburr(): string;
    splitChunks(chunkSize: number): string[];

    numberToText(lang?: string): string;
    reverseWordsInString(): string;

    stringPermutations(): string[];
    stringPermutationsGenerator(): Generator<string>;
    stringCombinations(): string[];

    /* =========================
       Validations
       ========================= */

    isURL(): boolean;
    isEmail(): boolean;
    isDate(): boolean;
    isEmpty(): boolean;
    isSlug(): boolean;
    isTypeOf(type: string): boolean;

    isIPv4(): boolean;
    isIPv6(): boolean;
    isHexColor(): boolean;

    isPalindrome(): boolean;
    isCoordinates(): boolean;

    isLowerCase(): boolean;
    isUpperCase(): boolean;
    isAlphabetic(): boolean;
    isAlphaNumeric(): boolean;

    isAnagram(other: string): boolean;
    isMacAddress(): boolean;
    isPanagram(): boolean;

    /* =========================
       Analysis
       ========================= */

    wordCount(): number;
    contentWordCount(): number;
    functionWordCount(): number;
    readingDuration(wordsPerMinute?: number): number;

    characterCount(): number;
    characterFrequency(): Record<string, number>;

    stringSimilarity(other: string): number;
    complexity(): {
      score: number;
      uniqueness: number;
      length: number;
    };

    patternCount(pattern: string | RegExp): number;
    vowelConsonantCount(): {
      vowels: number;
      consonants: number;
    };

    checkMultiplePatterns(patterns: string[]): Record<string, number>;
    checkSubsequence(subsequence: string): boolean;
    stringRotation(other: string): boolean;

    lexicographicalRank(): number;

    /* =========================
       Formatting
       ========================= */

    capitalize(): string;
    formatNumber(locale?: string): string;
    formatPhone(countryCode?: string): string;

    formatDuration(): string;
    trim(): string;

    formatRomanNumeral(): string;
    formatPercentage(decimals?: number): string;
    formatFileSize(): string;

    formatOrdinal(): string;
    formatList(conjunction?: string): string;

    formatCreditCard(): string;

    formatToOctal(prefix?: boolean): string;
    formatTemperature(from: 'C' | 'F' | 'K', to: 'C' | 'F' | 'K'): string;

    formatScientific(precision?: number): string;
    formatToBinary(groupBits?: boolean): string;
    formatToHexadecimal(prefix?: boolean): string;
    formatToDecimal(base: 2 | 8 | 16): number;
  }
}

export function extendStringPrototype(): void {
  const modules = [analyzing, formatting, transformations, validations];

  modules.forEach((module) => {
    Object.keys(module).forEach((key) => {
      const fn = (module as any)[key];

      if (typeof fn === 'function' && !String.prototype.hasOwnProperty(key)) {
        Object.defineProperty(String.prototype, key, {
          value: function (this: string, ...args: any[]) {
            return fn(this, ...args);
          },
          writable: true,
          configurable: true,
          enumerable: false,
        });
      }
    });
  });
}

export default {
  analyzing,
  formatting,
  transformations,
  validations,
  extendStringPrototype,
};
