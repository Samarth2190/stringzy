export * from './analyzing';
export * from './formatting';
export * from './transformations';
export * from './validations';

import * as analyzing from './analyzing';
import * as formatting from './formatting';
import * as transformations from './transformations';
import * as validations from './validations';

declare global {
  interface String {
    capitalize(): string;
    camelCase(): string;
    kebabCase(): string;
    snakeCase(): string;
    isEmail(): boolean;
    isPalindrome(): boolean;
    wordCount(): number;
    characterCount(): number;
  }
}

export function extendStringPrototype(): void {
  const modules = [analyzing, formatting, transformations, validations];

  modules.forEach((module) => {
    Object.keys(module).forEach((key) => {
      const fn = (module as any)[key];

      if (typeof fn === 'function' && !String.prototype.hasOwnProperty(key)) {
        Object.defineProperty(String.prototype, key, {
          value: function (this: string, ...args: any[]) {
            return fn(this, ...args);
          },
          writable: true,
          configurable: true,
          enumerable: false,
        });
      }
    });
  });
}

export default {
  analyzing,
  formatting,
  transformations,
  validations,
  extendStringPrototype,
};
