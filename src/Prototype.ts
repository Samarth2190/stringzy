
import { camelCase, pascalCase, capitalizeWords } from './transformations';  

declare global {
  interface String {
    camelCase(): string;
    pascalCase(): string;
    capitalizeWords(): string;
  }
}

if (!String.prototype.camelCase) {
  Object.defineProperty(String.prototype, 'camelCase', {
    value: function () {
      return camelCase(this.toString());
    },
    writable: true,
    configurable: true,
  });
}

if (!String.prototype.pascalCase) {
  Object.defineProperty(String.prototype, 'pascalCase', {
    value: function () {
      return pascalCase(this.toString());
    },
    writable: true,
    configurable: true,
  });
}

if (!String.prototype.capitalizeWords) {
  Object.defineProperty(String.prototype, 'capitalizeWords', {
    value: function () {
      return capitalizeWords(this.toString());
    },
    writable: true,
    configurable: true,
  });
}

// (Add more methods similarly)
