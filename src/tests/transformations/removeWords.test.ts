import { describe, it } from 'node:test';
import assert from 'node:assert';
import { removeWords } from '../../transformations/removeWords';

describe('removeWords', () => {
  it('removes a single word', () => {
    assert.strictEqual(removeWords('hello world', 'world'), 'hello');
  });
  it('removes multiple words', () => {
    assert.strictEqual(removeWords('foo bar baz', ['bar', 'baz']), 'foo');
  });
  it('returns empty string for empty input', () => {
    assert.strictEqual(removeWords('', 'foo'), '');
  });
  it('throws if input is not a string', () => {
    assert.throws(() => removeWords(123 as any, 'foo'), /First parameter must be a string/);
  });
  it('throws if wordsToRemove is not string or array', () => {
    assert.throws(
      () => removeWords('foo', 123 as any),
      /Second parameter must be a string or an array/
    );
  });
});
