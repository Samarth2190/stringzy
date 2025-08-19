import { describe, it } from 'node:test';
import assert from 'node:assert';
import { vowelConsonantCount } from '../../analyzing/vowelConsonantCount';

describe('vowelConsonantCount', () => {
  it('returns 0s for empty string', () => {
    assert.deepStrictEqual(vowelConsonantCount(''), {vowels : 0,consonants:0});
  });
  it('counts lowercase vowels and consonants', () => {
    assert.deepStrictEqual(vowelConsonantCount('hello'), {vowels: 2, consonants: 3});
  });
  it('counts uppercase vowels and consonants', () => {
    assert.deepStrictEqual(vowelConsonantCount('HELLO'), {vowels: 2, consonants: 3});
  });
  it('counts vowels and consonants ignoring special characters and whitespaces', () => {
    assert.deepStrictEqual(vowelConsonantCount('Hello, World!'), {vowels: 3, consonants: 7});
  });
  it('throws if input is not a string', () => {
    assert.throws(() => vowelConsonantCount(123 as any), /Input must be a string/);
  });
});
