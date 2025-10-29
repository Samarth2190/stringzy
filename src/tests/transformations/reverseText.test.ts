import test from 'node:test';
import { reverseText } from '../../transformations/reverseText';

test('reverseText() should reverse the string correctly', () => {
  expect(reverseText('Hello World')).toBe('dlroW olleH');
  expect(reverseText('Stringzy')).toBe('yzgnirtS');
  expect(reverseText('')).toBe('');
});

function expect(actual: string) {
  return {
    toBe(expected: string) {
      if (actual !== expected) {
        throw new Error(`Expected '${expected}' but got '${actual}'`);
      }
    },
  };
}
