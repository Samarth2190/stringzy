import { describe, it } from 'node:test';
import assert from 'node:assert';
import { formatFileSize } from '../../formatting/fileSize';

describe('formatFileSize', () => {
  it('formats basic sizes correctly', () => {
    assert.strictEqual(formatFileSize(123), '123 B');
    assert.strictEqual(formatFileSize(1024), '1 KB');
    assert.strictEqual(formatFileSize(1048576), '1 MB');
    assert.strictEqual(formatFileSize(1073741824), '1 GB');
  });

  it('handles fractional sizes with correct rounding', () => {
    assert.strictEqual(formatFileSize(1572864), '1.5 MB'); // 1.5 MB
    assert.strictEqual(formatFileSize(1536, 1), '1.5 KB'); // 1.5 KB
  });

  it('handles precision configuration', () => {
    assert.strictEqual(formatFileSize(1500, 0), '1 KB'); // rounds down
    assert.strictEqual(formatFileSize(1500, 3), '1.465 KB');
  });

  it('handles zero correctly', () => {
    assert.strictEqual(formatFileSize(0), '0 B');
  });

  it('throws TypeError for invalid inputs', () => {
    assert.throws(() => formatFileSize('1024' as any), /Input must be a number/);
    assert.throws(() => formatFileSize(null as any), /Input must be a number/);
    assert.throws(() => formatFileSize(undefined as any), /Input must be a number/);
  });

  it('throws TypeError for invalid precision', () => {
    assert.throws(() => formatFileSize(1024, -1), /Precision must be a non-negative number/);
    assert.throws(() => formatFileSize(1024, '2' as any), /Precision must be a non-negative number/);
  });

  it('throws RangeError for negative byte values', () => {
    assert.throws(() => formatFileSize(-1024), /File size cannot be negative/);
  });
});
