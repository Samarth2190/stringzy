import test from 'node:test';
import '../Prototype';
import { camelCase, capitalizeWords } from '../transformations';

test('String.prototype chaining: camelCase -> capitalizeWords', () => {
  expect('hello world'.camelCase().capitalizeWords()).toBe(
    capitalizeWords(camelCase('hello world'))
  );
});
function expect(actual: string) {
    return {
        toBe(expected: string) {
            if (actual !== expected) {
                throw new Error(`Expected '${actual}' to be '${expected}'`);
            }
        }
    };
}

