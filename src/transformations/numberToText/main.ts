import {NumberToTextLanguage} from "./types";
import numberToTextPl from "./implementation_PL";
import numberToTextEn from "./implementation_EN";

/**
 * Converts a number to its text representation in the specified language.
 *
 * @param num - The number to convert (integer between -1,000,000,000,000 and 1,000,000,000,000)
 * @param lang - The target language ('en' for English, 'pl' for Polish)
 * @returns The text representation of the number
 *
 * @example
 * numberToText(123) // "one hundred twenty-three"
 * numberToText(123, 'pl') // "sto dwadzieścia trzy"
 * numberToText(-45) // "minus forty-five"
 * numberToText(1000000) // "one million"
 * numberToText(1000000, 'pl') // "milion"
 *
 * @throws {TypeError} If num is not a valid integer or lang is not supported
 * @throws {RangeError} If num is outside the supported range
 */
export function numberToText(num: number, lang: NumberToTextLanguage = 'en'): string {
    validateNumber(num);
    validateLanguage(lang);

    switch (lang) {
        case 'en':
            return numberToTextEn(num);
        case 'pl':
            return numberToTextPl(num);
        default:
            throw new TypeError('Unsupported language');
    }
}

/////////////////////////////////////////
//// Validation
/////////////////////////////////////////

/**
 * Checks if the provided value is an integer within the allowed range.
 *
 * @param num - The value to check
 * @throws {TypeError} If num is not an integer
 * @throws {RangeError} If num is outside the range -1,000,000,000,000 to 1,000,000,000,000
 */
function validateNumber(num: unknown): asserts num is number {
    if (typeof num !== 'number' || !Number.isInteger(num) || isNaN(num)) {
        throw new TypeError('Num param should be number');
    }

    if (num < -1_000_000_000_000 || num > 1_000_000_000_000) {
        throw new RangeError('Number must be between -1,000,000,000,000 and 1,000,000,000,000');
    }
}

/**
 * Checks if the provided language is supported.
 *
 * @param lang - The language code to check
 * @throws {TypeError} If lang is not one of the supported languages
 */
function validateLanguage(lang: unknown): asserts lang is NumberToTextLanguage {
    const validLanguages: NumberToTextLanguage[] = ['en', 'pl'];
    if (!validLanguages.includes(lang as any)) {
        throw new TypeError(`Language must be one of: ${validLanguages.join(', ')}`);
    }
}