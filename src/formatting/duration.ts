/**
 * Converts a duration in seconds or milliseconds into a human-readable string.
 * Intelligently displays hours, minutes, seconds, and optionally milliseconds,
 * while skipping zero-value units unless the entire duration is zero.
 *
 * @param {number} input - The duration in seconds or milliseconds.
 * @param {object} [options] - Configuration options.
 * @param {string} [options.unit='seconds'] - The input unit: 'seconds' or 'milliseconds'.
 * @param {string} [options.format='short'] - Output format: 'short', 'medium', or 'long'.
 * @param {boolean} [options.includeMs=false] - Whether to include milliseconds in the output.
 * @param {string} [options.delimiter=' '] - The delimiter between time units.
 * @returns {string} The formatted duration string.
 * @throws {TypeError} If input is not a number or is negative.
 *
 * @example
 * formatDuration(60);        // "1m"
 * formatDuration(61);        // "1m 1s"
 * formatDuration(3661);      // "1h 1m 1s"
 * formatDuration(1234567, { unit: 'milliseconds', includeMs: true }); // "20m 34s 567ms"
 * formatDuration(3600, { format: 'long' }); // "1 hour"
 */
export function formatDuration(input: number, options?: {
  unit?: 'seconds' | 'milliseconds';
  format?: 'short' | 'medium' | 'long';
  includeMs?: boolean;
  delimiter?: string;
}): string {
  // Validate input
  if (typeof input !== 'number' || isNaN(input)) {
    throw new TypeError('Input must be a number');
  }
  if (input < 0) {
    throw new TypeError('Input must be non-negative');
  }

  // Default options
  const opts = {
    unit: options?.unit || 'seconds',
    format: options?.format || 'short',
    includeMs: options?.includeMs || false,
    delimiter: options?.delimiter || ' '
  };

  // Convert to milliseconds
  const totalMs = opts.unit === 'seconds' ? input * 1000 : input;
  
  // Handle zero case
  if (totalMs === 0) {
    return '0s';
  }

  // Calculate time components
  let remaining = Math.floor(totalMs);
  const ms = remaining % 1000;
  remaining = Math.floor(remaining / 1000);
  const seconds = remaining % 60;
  remaining = Math.floor(remaining / 60);
  const minutes = remaining % 60;
  const hours = Math.floor(remaining / 60);

  // Build the output parts
  const parts: string[] = [];

  // Add non-zero units
  if (hours > 0) {
    parts.push(formatTimeUnit(hours, 'h', opts.format));
  }
  
  if (minutes > 0) {
    parts.push(formatTimeUnit(minutes, 'm', opts.format));
  }
  
  if (seconds > 0 || (parts.length === 0 && !opts.includeMs)) {
    parts.push(formatTimeUnit(seconds, 's', opts.format));
  }
  
  if (opts.includeMs && ms > 0) {
    parts.push(formatTimeUnit(ms, 'ms', opts.format));
  }

  return parts.join(opts.delimiter);
}

/**
 * Formats a single time unit according to the specified format.
 * @private
 */
function formatTimeUnit(value: number, unit: string, format: string): string {
  switch (format) {
    case 'long':
      const unitNames: Record<string, [string, string]> = {
        'h': ['hour', 'hours'],
        'm': ['minute', 'minutes'],
        's': ['second', 'seconds'],
        'ms': ['millisecond', 'milliseconds']
      };
      const [singular, plural] = unitNames[unit];
      return `${value} ${value === 1 ? singular : plural}`;
      
    case 'medium':
      const paddedValue = unit === 'h' ? value : value.toString().padStart(2, '0');
      return `${paddedValue}${unit}`;
      
    default: // 'short'
      return `${value}${unit}`;
  }
}