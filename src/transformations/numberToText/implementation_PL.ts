import {NUMBERS_PL} from "./types";
import {getOrderOfMagnitude, isNegative} from "./helpers";

/**
 * Converts a number to its Polish textual representation.
 *
 * Handles negative numbers, numbers from 0 to billions, and applies correct Polish grammatical forms.
 *
 * @param num The number to convert.
 * @returns The textual representation of the number in Polish.
 */
function numberToTextPl(num: number): string {
    if (isNegative(num)) {
        return `minus ${numberToTextPl(Math.abs(num))}`;
    }

    // 0-20
    if (num <= 20 && NUMBERS_PL[num]) {
        return NUMBERS_PL[num];
    }

    // 21-99
    if (num < 100) {
        const tens = Math.floor(num / 10) * 10;
        const ones = num % 10;
        if (ones === 0) {
            return NUMBERS_PL[tens];
        }
        return `${NUMBERS_PL[tens]} ${NUMBERS_PL[ones]}`;
    }

    // 100+
    const magnitude = getOrderOfMagnitude(num);
    const quotient = Math.floor(num / magnitude);
    const remainder = num % magnitude;

    // Special handling for hundreds
    if (magnitude === 100) {
        const hundredsForm = quotient * 100;
        const result = NUMBERS_PL[hundredsForm];
        return remainder === 0 ? result : `${result} ${numberToTextPl(remainder)}`;
    }

    // 1000+
    let prefix = '';
    if (quotient !== 1) {
        prefix = numberToTextPl(quotient) + ' ';
    }

    const magnitudeForm = getPolishGrammaticalForm(magnitude, quotient);
    const result = `${prefix}${magnitudeForm}`.trim();

    return remainder === 0 ? result : `${result} ${numberToTextPl(remainder)}`;
}

/**
 * Gets the correct grammatical form for Polish magnitude words
 * based on the number (singular, few, many)
 */
function getPolishGrammaticalForm(magnitude: number, count: number): string {
    const forms: Record<number, [string, string, string]> = {
        1_000: ['tysiąc', 'tysiące', 'tysięcy'],
        1_000_000: ['milion', 'miliony', 'milionów'],
        1_000_000_000: ['miliard', 'miliardy', 'miliardów'],
        1_000_000_000_000: ['bilion', 'biliony', 'bilionów']
    };

    const formArray = forms[magnitude];
    if (!formArray) {
        throw new Error(`No grammatical forms defined for magnitude ${magnitude}`);
    }

    const lastTwoDigits = count % 100;
    const lastDigit = count % 10;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
        return formArray[2];
    }

    if (lastDigit === 1) {
        return formArray[0];
    } else if (lastDigit >= 2 && lastDigit <= 4) {
        return formArray[1];
    } else {
        return formArray[2];
    }
}

export default  numberToTextPl;