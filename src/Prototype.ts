import { camelCase } from './transformations/camelCase';
import { capitalizeWords } from './transformations/capitalizeWords';

// Ensure this file is a module
export {};

// Attach transformation functions to String.prototype at runtime so tests
// that rely on prototype chaining (e.g. 'a b'.camelCase().capitalizeWords())
// work as expected.
// We use `function` instead of arrow to bind `this` correctly.
if (typeof (String.prototype as any).camelCase !== 'function') {
  (String.prototype as any).camelCase = function (): string {
    return camelCase(String(this));
  };
}

if (typeof (String.prototype as any).capitalizeWords !== 'function') {
  (String.prototype as any).capitalizeWords = function (): string {
    return capitalizeWords(String(this));
  };
}
