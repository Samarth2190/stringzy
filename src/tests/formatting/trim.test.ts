import { describe, it } from 'node:test';
import assert from 'node:assert';
// NOTE: Adjust this import path to match your project structure
import { trim } from '../../formatting/trim';

describe('trim', () => {
  it('removes simple leading and trailing spaces', () => {
    assert.strictEqual(trim(' hello world '), 'hello world');
    assert.strictEqual(trim('   leading'), 'leading');
    assert.strictEqual(trim('trailing   '), 'trailing');
  });

  it('collapses multiple spaces between words into one', () => {
    assert.strictEqual(trim('multiple   spaces'), 'multiple spaces');
    assert.strictEqual(trim('one  two   three    four'), 'one two three four');
  });

  it('handles tabs and line breaks as whitespace', () => {
    assert.strictEqual(trim('line \n breaks\tand  tabs'), 'line breaks and tabs');
    assert.strictEqual(trim('tabs\tbetween\twords'), 'tabs between words');
    assert.strictEqual(trim('new\nlines\n\nand\r\nwindows'), 'new lines and windows');
  });

  it('handles a complex mix of all whitespace types', () => {
    const input = ' \n  \t hello \n\n world \t  !   ';
    const expected = 'hello world !';
    assert.strictEqual(trim(input), expected);
  });

  it('handles edge cases: empty and whitespace-only strings', () => {
    assert.strictEqual(trim(''), '');
    assert.strictEqual(trim('   '), '');
    assert.strictEqual(trim(' \n \t \r\n '), '');
  });

  it('throws an error if input is not a string', () => {
    assert.throws(() => trim(123 as any), /Input must be a string/);
    assert.throws(() => trim(null as any), /Input must be a string/);
    assert.throws(() => trim(undefined as any), /Input must be a string/);
    assert.throws(() => trim({} as any), /Input must be a string/);
    assert.throws(() => trim([] as any), /Input must be a string/);
  });
});