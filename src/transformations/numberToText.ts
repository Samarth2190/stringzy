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

function identifyFirstDigit(num: number, orderOfMagnitude: number): number {
    return Math.floor(num / orderOfMagnitude);

}

function numberToTextEn(num: number): string {
    if (isMinus(num)) {
        return `minus ${numberToTextEn(num*(-1))}`;
    }

    if (numbers_en[num] && num < 100) {
        return numbers_en[num];
    }

    const orderOfMagnitude = 10 ** (num.toString().length - 1);
    let firstDigit: number = identifyFirstDigit(num, orderOfMagnitude);
    const remainder: number = num % orderOfMagnitude;

    if(orderOfMagnitude === 10) {
        firstDigit = firstDigit  * orderOfMagnitude;
        return remainder ? `${numbers_en[firstDigit]}-${numbers_en[remainder]}` : numbers_en[firstDigit];
    }
    else {
        if (remainder === 0) {
            return `${numbers_en[firstDigit]} ${numbers_en[orderOfMagnitude]}`;
        }
        return `${numbers_en[firstDigit]} ${numbers_en[orderOfMagnitude]} ${numberToTextEn(remainder)}`;
    }
}

function isMinus(num: number): boolean {
    return num < 0;
}

function numberToTextPl(num: number): string {
    if (isMinus(num)) {
        return `minus ${numberToTextPl(num*(-1))}`;
    }

    if (numbers_pl[num]) {
        return numbers_pl[num];
    }

    const orderOfMagnitude = 10 ** (num.toString().length - 1);
    let firstDigit: number = identifyFirstDigit(num, orderOfMagnitude);
    const remainder: number = num % orderOfMagnitude;

    console.log(`num: ${num}, orderOfMagnitude: ${orderOfMagnitude}, firstDigit: ${firstDigit}, remainder: ${remainder}`);


    if(orderOfMagnitude === 10) {
        firstDigit = firstDigit  * orderOfMagnitude;
        return remainder ? `${numbers_pl[firstDigit]} ${numbers_pl[remainder]}` : numbers_pl[firstDigit];
    }
    else {
        if (remainder === 0) {
            return `${numbers_pl[firstDigit]} ${numbers_pl[orderOfMagnitude]}`;
        }
        return `${numbers_pl[firstDigit]} ${numbers_pl[orderOfMagnitude]} ${numberToTextPl(remainder)}`;
    }
}

/////////////////////////////////////////
//// Validation Functions
/////////////////////////////////////////

function validateNumber(num: any): asserts num is number {
    if (!Number.isInteger(num) || isNaN(num)) {
        throw new TypeError('Num param should be number');
    }

    if ( num <= -1000000000001 || num >= 1000000000001) {
        throw new RangeError('Num param should be an integer between -1000000000000 and 100000000000');
    }
}

function validateLanguage(lang: any): asserts lang is NumberToTextLanguage {
    const validLanguages: NumberToTextLanguage[] = ['en', 'pl'];
    if (!validLanguages.includes(lang)) {
        throw new TypeError('Lang param invalid');
    }
}

/////////////////////////////////////////
//// Constants
/////////////////////////////////////////

type NumberToTextLanguage = 'en' | 'pl';


const numbers_en: Record<number, string> = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'hundred',
    1000: 'thousand',
    10000: 'ten thousand',
    100000: 'hundred thousand',
    1000000: 'million',
    10000000: 'ten million',
    100000000: 'hundred million',
    1000000000: 'billion',
    10000000000: 'ten billion',
    100000000000: 'hundred billion',
    1000000000000: 'trillion',
}

const numbers_pl: Record<number, string> = {
    0: 'zero',
    1: 'jeden',
    2: 'dwa',
    3: 'trzy',
    4: 'cztery',
    5: 'pięć',
    6: 'sześć',
    7: 'siedem',
    8: 'osiem',
    9: 'dziewięć',
    10: 'dziesięć',
    11: 'jedenaście',
    12: 'dwanaście',
    13: 'trzynaście',
    14: 'czternaście',
    15: 'piętnaście',
    16: 'szesnaście',
    17: 'siedemnaście',
    18: 'osiemnaście',
    19: 'dziewiętnaście',
    20: 'dwadzieścia',
    30: 'trzydzieści',
    40: 'czterdzieści',
    50: 'pięćdziesiąt',
    60: 'sześćdziesiąt',
    70: 'siedemdziesiąt',
    80: 'osiemdziesiąt',
    90: 'dziewięćdziesiąt',
    100: 'sto',
    200: 'dwieście',
    300: 'trzysta',
    400: 'czterysta',
    500: 'pięćset',
    600: 'sześćset',
    700: 'siedemset',
    800: 'osiemset',
    900: 'dziewięćset',
    1000: 'tysiąc',
    1000000: 'milion',
    1000000000: 'miliard',
    1000000000000: 'bilion',
};
