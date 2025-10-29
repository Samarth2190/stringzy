import test from 'node:test';
import { slugify } from '../../transformations/slugify';

test('slugify() should convert text into URL-friendly format', () => {
  expect(slugify('Hello World!')).toBe('hello-world');
  expect(slugify('This is a test')).toBe('this-is-a-test');
  expect(slugify('Clean---Slug')).toBe('clean-slug');
});

function expect(actual: string) {
  return {
    toBe(expected: string) {
      if (actual !== expected) {
        throw new Error(`Expected '${actual}' to be '${expected}' but got '${actual}'`);
      }
    },
  };
}
