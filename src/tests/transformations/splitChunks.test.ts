import { describe, it } from 'node:test';
import assert from 'node:assert';
import { splitChunks } from '../../transformations/splitChunks';

describe('splitChunks', () => {
  it('creates chunks of size 3', () => {
    assert.deepStrictEqual(splitChunks('hello world', 3), ["hel", "lo ", "wor", "ld"]);
  });
  it('creates chunks of size 2', () => {
    assert.deepStrictEqual(splitChunks('hello world', 2), ["he", "ll", "o ", "wo", "rl", "d"]);
  });
  it('creates chunks of size 1', () => {
    assert.deepStrictEqual(splitChunks('hello world'), ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]);
  });
});
