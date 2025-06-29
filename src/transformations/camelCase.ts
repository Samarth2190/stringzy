export function camelCase(text: string): string {
  if (text == null) return '';
  return text
    .trim()
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .replace(/_/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/\s(.)/g, (_, character) => character.toUpperCase())
    .replace(/^(.)/, (_, character) => character.toLowerCase());
}
