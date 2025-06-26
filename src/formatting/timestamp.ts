/**
 * Formats a timestamp into various formats.
 *
 * @param timestamp - Timestamp in milliseconds or seconds.
 * @param format - The output format type. Supported values:
 * @returns A formatted string based on the given type.
 *
 * @example
 * formatTimestamp(1719380472000, "date");      // "2024-06-26"
 * formatTimestamp(1719380472000, "time");      // "17:21:12"
 * formatTimestamp(1719380472000, "relative");  // "2 days ago"
 * formatTimestamp(1719380472000, "monthDate"); // "February 5 2026"
 * @throws {Error} If an unsupported format type is provided.
*/


export function formatTimestamp(
  timestamp: number,
  format: 'date' | 'time' | 'relative' | 'monthDate' = 'date'
): string {
  // turn second -> milisecond
  if (timestamp < 1e12) {
    timestamp *= 1000;
  }

  const date = new Date(timestamp);
  const now = new Date();

  const pad = (n: number): string => n.toString().padStart(2, '0');

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  if (format === 'date') {
    return `${date.getUTCFullYear()}-${pad(date.getUTCMonth() + 1)}-${pad(date.getUTCDate())}`;
  }

  if (format === 'time') {
    return `${pad(date.getUTCHours())}:${pad(date.getUTCMinutes())}:${pad(date.getUTCSeconds())}`;
  }

  if (format === 'relative') {
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
        // RelativeTimeFormat usage: 
        //console.log(rtf.format(-1, 'day')); // "yesterday"
        //console.log(rtf.format(-3, 'day')); // "3 days ago"
        //console.log(rtf.format(2, 'month')); // "in 2 months"

    if (seconds < 60) return 'just now';
    if (seconds < 3600) return rtf.format(-Math.floor(seconds / 60), 'minute');
    if (seconds < 86400) return rtf.format(-Math.floor(seconds / 3600), 'hour');
    if (seconds < 2592000) return rtf.format(-Math.floor(seconds / 86400), 'day');
    if (seconds < 31536000) return rtf.format(-Math.floor(seconds / 2592000), 'month');
    return rtf.format(-Math.floor(seconds / 31536000), 'year');
  }

  if (format === 'monthDate') {
    return `${months[date.getUTCMonth()]} ${date.getUTCDate()} ${date.getUTCFullYear()}`;
  }

  throw new Error(`Unsupported format type: ${format}`);
}
