export function pascalCase(text: string): string {
  if (text == null) return '';
  return text
    .trim()
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .replace(/_/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/(^|\s)(.)/g, (_, prefix, character) => character.toUpperCase())
    .replace(/\s/g, '');
}
