import { camelCase } from './transformations/camelCase';
import { capitalizeWords } from './transformations/capitalizeWords';

declare global {
  interface String {
    camelCase(): string;   // 👈 match the existing function name
    capitalizeWords(): string;
  }
}

String.prototype.camelCase = function () {
  return camelCase(this.toString());
};
String.prototype.capitalizeWords = function () {
  return capitalizeWords(this.toString());
};
export {};