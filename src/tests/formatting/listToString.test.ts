import { describe, it } from 'node:test';
import assert from 'node:assert';
import { formatList } from '../../formatting/listToString';

describe('formatList', () => {
  it('formats empty arrays correctly', () => {
    assert.strictEqual(formatList([]), '');
  });

  it('formats single-item arrays correctly', () => {
    assert.strictEqual(formatList(['apple']), 'apple');
  });

  it('formats two-item arrays correctly', () => {
    assert.strictEqual(formatList(['apples', 'bananas']), 'apples and bananas');
  });

  it('formats three or more items with Oxford comma', () => {
    assert.strictEqual(formatList(['apples', 'bananas', 'cherries']), 'apples, bananas, and cherries');
    assert.strictEqual(formatList(['red', 'blue', 'green', 'yellow']), 'red, blue, green, and yellow');
  });

  it('throws TypeError for non-array inputs', () => {
    assert.throws(() => formatList('apple' as any), /Input must be an array/);
    assert.throws(() => formatList(123 as any), /Input must be an array/);
  });

  it('throws TypeError for non-string elements in array', () => {
    assert.throws(() => formatList(['apple', 123 as any]), /All elements in the array must be strings/);
    assert.throws(() => formatList(['apple', null as any]), /All elements in the array must be strings/);
  });

  it('throws TypeError for mixed arrays (strings + other types)', () => {
    assert.throws(() => formatList(['apple', 42, 'banana'] as any), /All elements in the array must be strings/);
    assert.throws(() => formatList(['apple', true, 'banana'] as any), /All elements in the array must be strings/);
    assert.throws(() => formatList(['apple', undefined, 'banana'] as any), /All elements in the array must be strings/);
    assert.throws(() => formatList(['apple', {}, 'banana'] as any), /All elements in the array must be strings/);
  });
});
