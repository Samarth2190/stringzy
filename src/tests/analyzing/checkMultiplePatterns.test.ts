import { describe, it } from 'node:test';
import assert from 'node:assert';
import { checkMultiplePatterns } from '../../analyzing/checkMultiplePatterns';

describe('checkMultiplePatterns', () => {
  it('finds multiple valid matches', () => {
    const text = 'abracadabra';
    const patterns = ['abra', 'cad'];
    const result = checkMultiplePatterns(text, patterns);

    // "abra" occurs at index 0: "abra...cadabra"
    // and again at index 7: "abracad...abra"
    assert.deepStrictEqual(result['abra'], [0, 7]);

    // "cad" occurs once starting at index 4: "abraCADabra"
    assert.deepStrictEqual(result['cad'], [4]);
  });

  it('handles overlapping patterns', () => {
    const text = 'aaaa';
    const patterns = ['aa', 'aaa'];
    const result = checkMultiplePatterns(text, patterns);

    // "aa" occurs at indices 0 ("aa.."), 1 (".aa."), 2 ("..aa")
    assert.deepStrictEqual(result['aa'], [0, 1, 2]);

    // "aaa" occurs at indices 0 ("aaa.") and 1 (".aaa")
    assert.deepStrictEqual(result['aaa'], [0, 1]);
  });

  it('returns empty arrays when no matches found', () => {
    const text = 'hello world';
    const patterns = ['xyz', '123'];
    const result = checkMultiplePatterns(text, patterns);

    // Neither "xyz" nor "123" exist in "hello world"
    assert.deepStrictEqual(result['xyz'], []);
    assert.deepStrictEqual(result['123'], []);
  });

  it('returns empty object when text is empty', () => {
    // No text to search → nothing to return
    const result = checkMultiplePatterns('', ['a', 'b']);
    assert.deepStrictEqual(result, {});
  });

  it('returns empty object when patterns array is empty', () => {
    // No patterns given → nothing to search for
    const result = checkMultiplePatterns('hello', []);
    assert.deepStrictEqual(result, {});
  });

  it('skips patterns longer than the text', () => {
    const result = checkMultiplePatterns('hi', ['longpattern']);
    // pattern is longer than text → no match possible
    assert.deepStrictEqual(result['longpattern'], []);
  });

  it('is case-sensitive by default', () => {
    const text = 'Hello hello';
    const patterns = ['Hello', 'hello'];
    const result = checkMultiplePatterns(text, patterns);

    assert.deepStrictEqual(result['Hello'], [0]);
    assert.deepStrictEqual(result['hello'], [6]);
  });

  it('handles spaces and special characters as part of patterns', () => {
    const text = 'hi there!';
    const patterns = [' ', '!'];
    const result = checkMultiplePatterns(text, patterns);

    // space occurs at index 2, "!" occurs at the end
    assert.deepStrictEqual(result[' '], [2]);
    assert.deepStrictEqual(result['!'], [8]);
  });

  it('does not match mixed case unless exact', () => {
    const text = 'RabinKarp';
    const patterns = ['rabinkarp'];
    const result = checkMultiplePatterns(text, patterns);

    // "rabinkarp" does not match "RabinKarp" because of case
    assert.deepStrictEqual(result['rabinkarp'], []);
  });

  it('throws if text is not a string', () => {
    assert.throws(() => checkMultiplePatterns(123 as any, ['a']), /Text must be a string/);
  });

  it('throws if patterns is not an array of strings', () => {
    assert.throws(
      () => checkMultiplePatterns('abc', 'a' as any),
      /Patterns must be an array of strings/
    );
    assert.throws(
      () => checkMultiplePatterns('abc', [123] as any),
      /Patterns must be an array of strings/
    );
  });
});
