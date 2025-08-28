import { numberToText } from '../../transformations';
import { NumberToTextLanguage } from '../../transformations/numberToText/types';

describe('numberToText', () => {
  describe('Param error handling', () => {
    it('throws for non-number input', () => {
      expect(() => numberToText('aaaa' as any)).toThrow(/Num param should be number/i);
    });

    it('throws for numbers out of range', () => {
      expect(() => numberToText(1000000000001)).toThrow(RangeError);
      expect(() => numberToText(-1000000000001)).toThrow(RangeError);
    });

    it('throws for invalid language', () => {
      const validLanguages: NumberToTextLanguage[] = ['en', 'pl'];
      const errorMessage = `Language must be one of: ${validLanguages.join(', ')}`;
      expect(() => numberToText(123, 'invalid' as any)).toThrow(new RegExp(errorMessage, 'i'));
    });
  });

  describe('Conversion cases - en', () => {
    it('converts numbers to English text', () => {
      expect(numberToText(0)).toBe('zero');
      expect(numberToText(1)).toBe('one');
      expect(numberToText(5)).toBe('five');
      expect(numberToText(10)).toBe('ten');
      expect(numberToText(15)).toBe('fifteen');
      expect(numberToText(21)).toBe('twenty-one');
      expect(numberToText(99)).toBe('ninety-nine');
      expect(numberToText(100)).toBe('one hundred');
      expect(numberToText(101)).toBe('one hundred one');
      expect(numberToText(215)).toBe('two hundred fifteen');
      expect(numberToText(1000)).toBe('one thousand');
      expect(numberToText(2023)).toBe('two thousand twenty-three');
      expect(numberToText(1000000)).toBe('one million');
      expect(numberToText(1200000)).toBe('one million two hundred thousand');
      expect(numberToText(1000000000)).toBe('one billion');
      expect(numberToText(1000000000000)).toBe('one trillion');

      expect(numberToText(-1)).toBe('minus one');
      expect(numberToText(-215)).toBe('minus two hundred fifteen');
      expect(numberToText(-1000000)).toBe('minus one million');
    });
  });

  describe('Conversion cases - pl', () => {
    it('converts numbers to Polish text', () => {
      expect(numberToText(0, 'pl')).toBe('zero');
      expect(numberToText(1, 'pl')).toBe('jeden');
      expect(numberToText(5, 'pl')).toBe('pięć');
      expect(numberToText(10, 'pl')).toBe('dziesięć');
      expect(numberToText(15, 'pl')).toBe('piętnaście');
      expect(numberToText(21, 'pl')).toBe('dwadzieścia jeden');
      expect(numberToText(99, 'pl')).toBe('dziewięćdziesiąt dziewięć');
      expect(numberToText(100, 'pl')).toBe('sto');
      expect(numberToText(101, 'pl')).toBe('sto jeden');
      expect(numberToText(215, 'pl')).toBe('dwieście piętnaście');
      expect(numberToText(1000, 'pl')).toBe('tysiąc');
      expect(numberToText(2023, 'pl')).toBe('dwa tysiące dwadzieścia trzy');
      expect(numberToText(1000000, 'pl')).toBe('milion');
      expect(numberToText(1200000, 'pl')).toBe('milion dwieście tysięcy');
      expect(numberToText(1000000000, 'pl')).toBe('miliard');
      expect(numberToText(1000000000000, 'pl')).toBe('bilion');

      expect(numberToText(-1, 'pl')).toBe('minus jeden');
      expect(numberToText(-215, 'pl')).toBe('minus dwieście piętnaście');
      expect(numberToText(-1000000, 'pl')).toBe('minus milion');
    });
  });
});
