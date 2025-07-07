
/////////////////////////////////////////
//// Type Definitions
/////////////////////////////////////////

export type NumberToTextLanguage = 'en' | 'pl';

/////////////////////////////////////////
//// Language Dictionaries
/////////////////////////////////////////

export const NUMBERS_EN: Record<number, string> = {
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
    1_000: 'thousand',
    1_000_000: 'million',
    1_000_000_000: 'billion',
    1_000_000_000_000: 'trillion'
};

export const NUMBERS_PL: Record<number, string> = {
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
    900: 'dziewięćset'
};