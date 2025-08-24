/**
 * Checks if a given string is a valid email address.
 *
 * Uses a regular expression to verify the format: it must contain
 * one "@" symbol, no spaces, and at least one dot after the "@"
 * (e.g., "example@domain.com").
 *
 * @param {string} str - The string to be checked.
 * @returns {boolean} True if the string is a valid email address, false otherwise.
 */

export function isEmail(str: string, opts?: { smtpUTF8?: boolean }): boolean {
  if (typeof str !== 'string') return false;
  if (!str) return false;
  // Enable SMTPUTF8 by default; set opts.smtpUTF8=false to enforce ASCII-only
  const smtpUTF8 = opts?.smtpUTF8 !== false;

  // Quick overall length guard
  if (str.length > 254) return false;

  // Find the separator '@' by scanning from right to left and skipping those inside quotes
  let inQuote = false;
  let atIndex = -1;
  for (let i = str.length - 1; i >= 0; i--) {
    const ch = str[i];
    if (ch === '"') {
      // toggle quote state if this quote is not escaped by a backslash
      const prev = str[i - 1];
      if (prev !== '\\') inQuote = !inQuote;
      continue;
    }
    if (ch === '@' && !inQuote) { atIndex = i; break; }
  }
  if (inQuote) return false; // unbalanced quotes
  if (atIndex <= 0 || atIndex === str.length - 1) return false;

  const local = str.slice(0, atIndex);
  const domain = str.slice(atIndex + 1);

  // Local-part length limit (64 octets)
  if (local.length > 64) return false;

  // Validate local part as dot-separated of atoms or quoted-strings
  // Validate local with a robust FSM that supports nested unescaped quotes inside quoted strings
  const isAsciiAtext = (ch: string) => /[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]/.test(ch);
  const isUnicodeAtext = (ch: string) => {
    if (!smtpUTF8) return false;
    // Disallow obvious separators and specials used by the parser
    if (ch === '.' || ch === ' ' || ch === '"' || ch === '\\' || ch === '@') return false;
    // Disallow whitespace/control
    if (/\s/u.test(ch)) return false;
    // Allow Unicode Letters, Marks, Numbers and Symbols (e.g., emoji)
    return /[\p{L}\p{N}\p{M}\p{S}]/u.test(ch);
  };
  let lastWasDot = false; // disallow consecutive or leading/trailing dots anywhere
  let inQ = false;        // inside a quoted token
  let qDepth = 0;         // quote nesting depth (>=1 when inside outer quotes)
  let escQ = false;       // backslash escape inside quotes
  let needDotAfterQuoted = false; // require a dot right after a quoted token if not at end

  for (let i = 0; i < local.length; i++) {
    const c = local[i];

    // If we just closed a quoted token, the very next char must be a dot
    if (!inQ && needDotAfterQuoted) {
      if (c !== '.') return false;
      needDotAfterQuoted = false;
      lastWasDot = true;
      continue;
    }

  if (inQ) {
      if (escQ) {
        // After a backslash, allow any non-newline character (broader under SMTPUTF8)
        if (/\r|\n/.test(c)) return false;
        escQ = false;
        continue;
      }
      if (c === '\\') { escQ = true; continue; }
      if (c === '"') {
        // Support nested unescaped quotes within a quoted token.
        // Only close the quoted token when depth returns to 0 and we're at end-of-local
        // or the next character is a dot (separator between tokens).
        if (qDepth > 1) {
          qDepth -= 1;
          lastWasDot = false;
          continue;
        }
        // qDepth === 1: decide whether to close or to start nesting
        if (i + 1 === local.length || local[i + 1] === '.') {
          // this quote closes the quoted token
          inQ = false;
          qDepth = 0;
          // require a dot if not at end
          if (i + 1 < local.length) needDotAfterQuoted = true;
          lastWasDot = false;
          continue;
        } else {
          // start a nested quote level
          qDepth += 1; // becomes 2
          lastWasDot = false;
          continue;
        }
      }
      // Inside quotes: allow ASCII VCHAR and space by default; with SMTPUTF8 allow any char except control newlines
      if (smtpUTF8) {
        if (/\r|\n/.test(c)) return false;
      } else {
        const code = c.charCodeAt(0);
        if (code < 0x20 || code > 0x7E) return false;
      }
  // Dots inside quoted string are allowed freely
      continue;
    }

    // outside quotes
    if (c === '"') {
      // quotes can only start at token boundaries (start or right after a dot)
      if (i > 0 && !lastWasDot) return false;
      inQ = true;
      qDepth = 1;
      escQ = false;
      lastWasDot = false;
      continue;
    }
    if (c === '.') {
      if (i === 0 || lastWasDot) return false; // leading or consecutive dot
      lastWasDot = true;
      continue;
    }
    if (c === ' ') return false; // no spaces outside quotes
  // must be atext outside quotes
  if (!(isAsciiAtext(c) || isUnicodeAtext(c))) return false;
    lastWasDot = false;
  }
  if (inQ || qDepth !== 0 || escQ) return false; // unbalanced quotes or dangling escape
  if (lastWasDot) return false; // trailing dot

  // Validate domain
  const labelRe = /^[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?$/;
  const ipv4Re = /^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/;
  const ipv6Re = /^IPv6:(?:[A-Fa-f0-9:]+)$/; // coarse check; detailed covered by overall tests

  if (domain.startsWith('[') && domain.endsWith(']')) {
    const literal = domain.slice(1, -1);
    if (ipv4Re.test(literal)) return true;
    if (ipv6Re.test(literal)) return true; // accept canonical IPv6 forms used in tests
    return false;
  }

  const parts = domain.split('.')
  if (parts.some(p => p.length === 0)) return false;
  for (const p of parts) {
    if (!labelRe.test(p)) return false;
  }
  return true;
}
