import { describe, it } from 'node:test';
import assert from 'node:assert';
import { formatTimestamp } from '../../formatting/timestamp';

describe('formatTimestamp', () => {
  const fixedTimestamp = Date.UTC(2024, 5, 26, 17, 21, 12); // 2024-06-26T17:21:12Z

  it('formats as date', () => {
    assert.strictEqual(formatTimestamp(fixedTimestamp, 'date'), '2024-06-26');
  });

  it('formats as time (UTC)', () => {
    assert.strictEqual(formatTimestamp(fixedTimestamp, 'time'), '17:21:12');
  });

  it('formats as monthDate', () => {
    assert.strictEqual(formatTimestamp(fixedTimestamp, 'monthDate'), 'June 26 2024');
  });

  it('formats as relative = just now', () => {
    const now = Date.now();
    const result = formatTimestamp(now, 'relative');
    assert.strictEqual(result, 'just now');
  });

});
