import {NUMBERS_EN} from "./types";
import {getOrderOfMagnitude, isNegative} from "./helpers";

/**
 * Converts a number to its English textual representation.
 *
 * Handles negative numbers, numbers from 0 to 20, tens, hundreds, thousands, and larger magnitudes.
 *
 * @param num The number to convert.
 * @returns The textual representation of the number in English.
 */
function numberToTextEn(num: number): string {
    if (isNegative(num)) {
        return `minus ${numberToTextEn(Math.abs(num))}`;
    }

    // 0-20
    if (num <= 20 && NUMBERS_EN[num]) {
        return NUMBERS_EN[num];
    }

    // 21-99
    if (num < 100) {
        const tens = Math.floor(num / 10) * 10;
        const ones = num % 10;
        if (ones === 0) {
            return NUMBERS_EN[tens];
        }
        return `${NUMBERS_EN[tens]}-${NUMBERS_EN[ones]}`;
    }

    // 100+
    const magnitude = getOrderOfMagnitude(num);
    const quotient = Math.floor(num / magnitude);
    const remainder = num % magnitude;

    // Special handling for hundreds
    if (magnitude === 100) {
        const result = `${numberToTextEn(quotient)} hundred`;
        return remainder === 0 ? result : `${result} ${numberToTextEn(remainder)}`;
    }

    // 1000+
    const magnitudeName = NUMBERS_EN[magnitude];
    const quotientText = numberToTextEn(quotient);
    const result = `${quotientText} ${magnitudeName}`;

    return remainder === 0 ? result : `${result} ${numberToTextEn(remainder)}`;
}

export default numberToTextEn;