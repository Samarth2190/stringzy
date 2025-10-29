export {};

declare global {
  interface String {
    /**
     * Converts the string to camelCase.
     */
    camelCase(): string;

    /**
     * Capitalizes the first letter of every word in the string.
     */
    capitalizeWords(): string;
  }
}
