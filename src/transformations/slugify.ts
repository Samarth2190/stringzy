/**
 * Converts a string into a URL-friendly slug
 * @param str Input string
 * @returns Slugified string
 */
export function slugify(str: string): string {
  if (!str) return '';
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '') // remove special chars
    .replace(/\s+/g, '-')          // replace spaces with -
    .replace(/-+/g, '-');          // remove multiple hyphens
}
