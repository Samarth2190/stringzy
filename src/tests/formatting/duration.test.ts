import { describe, it } from 'node:test';
import assert from 'node:assert';
import { formatDuration } from '../../formatting/duration';

describe('formatDuration', () => {
  describe('basic functionality', () => {
    it('formats exact minutes', () => {
      assert.strictEqual(formatDuration(60), '1m');
    });

    it('formats minutes and seconds', () => {
      assert.strictEqual(formatDuration(61), '1m 1s');
    });

    it('formats hours, minutes and seconds', () => {
      assert.strictEqual(formatDuration(3661), '1h 1m 1s');
    });

    it('formats exact hours', () => {
      assert.strictEqual(formatDuration(3600), '1h');
    });

    it('formats complex durations', () => {
      assert.strictEqual(formatDuration(7325), '2h 2m 5s');
    });

    it('formats milliseconds when specified', () => {
      assert.strictEqual(
        formatDuration(1234567, { unit: 'milliseconds', includeMs: true }), 
        '20m 34s 567ms'
      );
    });

    it('formats zero as zero seconds', () => {
      assert.strictEqual(formatDuration(0), '0s');
    });

    it('handles large values', () => {
      assert.strictEqual(formatDuration(86400), '24h');
    });
  });

  describe('format options', () => {
    it('formats with medium format', () => {
      assert.strictEqual(formatDuration(3661, { format: 'medium' }), '1h 01m 01s');
    });

    it('formats with long format', () => {
      assert.strictEqual(formatDuration(3661, { format: 'long' }), '1 hour 1 minute 1 second');
    });

    it('formats with custom delimiter', () => {
      assert.strictEqual(formatDuration(3661, { delimiter: ':' }), '1h:1m:1s');
    });
  });

  describe('error handling', () => {
    it('throws on non-numeric input', () => {
      assert.throws(() => formatDuration('60' as any), {
        name: 'TypeError',
        message: 'Input must be a number'
      });
    });

    it('throws on negative input', () => {
      assert.throws(() => formatDuration(-60), {
        name: 'TypeError',
        message: 'Input must be non-negative'
      });
    });
  });
});