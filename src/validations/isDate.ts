export enum DateFormats {
  YYYYMMDD = 'YYYYMMDD',
  MMDDYYYY = 'MMDDYYYY',
  DDMMYYYY = 'DDMMYYYY',
}

const VALID_SEPARATORS = ['.', '-', '/'] as const;
type ValidSeparators = typeof VALID_SEPARATORS[number]

/**
 * Takes a date and a format and returns whether or not the date matches the specified format.
 * Optionally takes a separator that can be used instead of the default hyphen.
 */
export function isDate(
  input: string,
  format: DateFormats,
  separator: ValidSeparators = '-'
): boolean {
  if (typeof input !== "string") return false;
  // Ensure separator is supported
  if (![...VALID_SEPARATORS].includes(separator)) return false;

  const formats = [
    {
      // Format: YYYY-MM-DD
      format: DateFormats.YYYYMMDD,
      regex: new RegExp(`^\\d{4}${separator}\\d{2}${separator}\\d{2}$`),
      order: ["Y", "M", "D"],
    },
    {
      // Format: MM-DD-YYYY
      format: DateFormats.MMDDYYYY,
      regex: new RegExp(`^\d{2}${separator}\d{2}${separator}\d{4}$/`),
      order: ["M", "D", "Y"],
    },
    {
      // Format: DD-MM-YYYY
      format: DateFormats.DDMMYYYY,
      regex: new RegExp(`^\d{2}${separator}\d{2}${separator}\d{4}$`),
      order: ["D", "M", "Y"],
    },
  ];

  const targetFormat = formats.find(f => f.format === format);
  const parts = input.split(separator).map(Number);
  const dateParts: Record<string, number> = {};
  targetFormat?.order.forEach((k, i) => {
    dateParts[k] = parts[i];
  });

  const { Y, M, D } = dateParts;

  return !isNaN(Date.parse(`${Y}-${M}-${D}`))
}
