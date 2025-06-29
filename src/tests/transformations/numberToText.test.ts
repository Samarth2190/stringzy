import {describe} from "node:test";
import assert from "node:assert";
import {numberToText} from "../../transformations/numberToText";


describe("numberToText", () => {
        describe("Param error handling", () => {
            assert.throws(() => numberToText("aaaa" as any), /Num param should be number/i);
            assert.throws(() => numberToText(123, "invalid" as any), /Lang param invalid/i);
            assert.throws(() => numberToText(1000000000001), RangeError);
            assert.throws(() => numberToText(-1000000000001), RangeError);
        })

        describe("Conversion cases - en", () => {
            assert.strictEqual(numberToText(0), "zero");
            assert.strictEqual(numberToText(1), "one");
            assert.strictEqual(numberToText(5), "five");
            assert.strictEqual(numberToText(10), "ten");
            assert.strictEqual(numberToText(15), "fifteen");
            assert.strictEqual(numberToText(21), "twenty-one");
            assert.strictEqual(numberToText(99), "ninety-nine");
            assert.strictEqual(numberToText(100), "one hundred");
            assert.strictEqual(numberToText(101), "one hundred one");
            assert.strictEqual(numberToText(215), "two hundred fifteen");
            assert.strictEqual(numberToText(1000), "one thousand");
            assert.strictEqual(numberToText(2023), "two thousand twenty-three");
            assert.strictEqual(numberToText(1000000), "one million");
            assert.strictEqual(numberToText(1200000), "one million two hundred thousand");
            assert.strictEqual(numberToText(1000000000), "one billion");
            assert.strictEqual(numberToText(1000000000000), "one trillion");

            assert.strictEqual(numberToText(-1), "minus one");
            assert.strictEqual(numberToText(-215), "minus two hundred fifteen");
            assert.strictEqual(numberToText(-1000000), "minus one million");

        });

        describe("Conversion cases - pl", () => {
            assert.strictEqual(numberToText(0, 'pl'), "zero");
            assert.strictEqual(numberToText(1, 'pl'), "jeden");
            assert.strictEqual(numberToText(5, 'pl'), "pięć");
            assert.strictEqual(numberToText(10, 'pl'), "dziesięć");
            assert.strictEqual(numberToText(15, 'pl'), "piętnaście");
            assert.strictEqual(numberToText(21, 'pl'), "dwadzieścia jeden");
            assert.strictEqual(numberToText(99, 'pl'), "dziewięćdziesiąt dziewięć");
            assert.strictEqual(numberToText(100, 'pl'), "sto");
            assert.strictEqual(numberToText(101, 'pl'), "sto jeden");
            assert.strictEqual(numberToText(215, 'pl'), "dwieście piętnaście");
            assert.strictEqual(numberToText(1000, 'pl'), "tysiąc");
            assert.strictEqual(numberToText(2023, 'pl'), "dwa tysiące dwadzieścia trzy");
            assert.strictEqual(numberToText(1000000, 'pl'), "milion");
            assert.strictEqual(numberToText(1200000, 'pl'), "jeden milion dwieście tysięcy");
            assert.strictEqual(numberToText(1000000000, 'pl'), "miliard");
            assert.strictEqual(numberToText(1000000000000, 'pl'), "bilion");

            assert.strictEqual(numberToText(-1, 'pl'), "minus jeden");
            assert.strictEqual(numberToText(-215, 'pl'), "minus dwieście piętnaście");
            assert.strictEqual(numberToText(-1000000, 'pl'), "minus milion");
        });

    }
)