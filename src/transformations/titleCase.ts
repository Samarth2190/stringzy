export function titleCase(text: string): string {
  if (text == null) return '';
  return text
    .trim()
    .toLowerCase()
    .replace(/([^\w\s]|_)/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/(^|\s)(.)/g, (_, prefix, character) => prefix + character.toUpperCase())
    .replace(/\s/g, ' ');
}
