import { describe, it } from 'node:test';
import assert from 'node:assert';
import { isMacAddress } from '../../validations/isMacAddress';

describe('isMacAddress', () => {
  it('returns true for valid MAC addresses with colons', () => {
    assert.strictEqual(isMacAddress('00:1A:2B:3C:4D:5E'), true);
    assert.strictEqual(isMacAddress('aa:bb:cc:dd:ee:ff'), true);
    assert.strictEqual(isMacAddress('FF:FF:FF:FF:FF:FF'), true);
    assert.strictEqual(isMacAddress('01:23:45:67:89:AB'), true);
  });

  it('returns true for valid MAC addresses with hyphens', () => {
    assert.strictEqual(isMacAddress('00-1A-2B-3C-4D-5E'), true);
    assert.strictEqual(isMacAddress('aa-bb-cc-dd-ee-ff'), true);
    assert.strictEqual(isMacAddress('FF-FF-FF-FF-FF-FF'), true);
  });

  it('returns false for MAC addresses with mixed separators', () => {
    assert.strictEqual(isMacAddress('00:1A-2B:3C-4D:5E'), false);
    assert.strictEqual(isMacAddress('AA-BB:CC-DD:EE-FF'), false);
  });

  it('returns false for MAC addresses with invalid hex digits', () => {
    assert.strictEqual(isMacAddress('00:1G:2B:3C:4D:5E'), false);
    assert.strictEqual(isMacAddress('ZZ:ZZ:ZZ:ZZ:ZZ:ZZ'), false);
    assert.strictEqual(isMacAddress('GG-GG-GG-GG-GG-GG'), false);
  });

  it('returns false for MAC addresses with wrong length', () => {
    assert.strictEqual(isMacAddress('00:1A:2B:3C:4D'), false); // only 5 pairs
    assert.strictEqual(isMacAddress('00:1A:2B:3C:4D:5E:7F'), false); // 7 pairs
    assert.strictEqual(isMacAddress('001A:2B:3C:4D:5E'), false); // first group too long
  });

  it('returns false for MAC addresses with leading/trailing spaces', () => {
    assert.strictEqual(isMacAddress(' 00:1A:2B:3C:4D:5E'), false);
    assert.strictEqual(isMacAddress('00:1A:2B:3C:4D:5E '), false);
    assert.strictEqual(isMacAddress(' 00:1A:2B:3C:4D:5E '), false);
  });

  it('returns false for MAC addresses with spaces inside', () => {
    assert.strictEqual(isMacAddress('00:1A:2B:3C:4D :5E'), false);
    assert.strictEqual(isMacAddress('00 :1A:2B:3C:4D:5E'), false);
    assert.strictEqual(isMacAddress('00:1A:2B:3C: 4D:5E'), false);
  });

  it('returns false for missing separators', () => {
    assert.strictEqual(isMacAddress('001A2B3C4D5E'), false);
    assert.strictEqual(isMacAddress('00:1A2B:3C4D:5E'), false);
    assert.strictEqual(isMacAddress('00-1A2B-3C4D-5E'), false);
  });

  it('returns false for extra separators', () => {
    assert.strictEqual(isMacAddress('00::1A:2B:3C:4D:5E'), false);
    assert.strictEqual(isMacAddress('00-1A--2B-3C-4D-5E'), false);
    assert.strictEqual(isMacAddress('00:1A:2B:3C:4D:5E:'), false);
  });

  it('returns false for empty strings and malformed inputs', () => {
    assert.strictEqual(isMacAddress(''), false);
    assert.strictEqual(isMacAddress('::::::'), false);
    assert.strictEqual(isMacAddress('--:--:--:--:--:--'), false);
    assert.strictEqual(isMacAddress('00:1A:2B:3C:4D:5E:'), false);
    assert.strictEqual(isMacAddress(':00:1A:2B:3C:4D:5E'), false);
  });

  it('returns false for non-hex characters and invalid formats', () => {
    assert.strictEqual(isMacAddress('00:1A:2B:3C:4D:GH'), false);
    assert.strictEqual(isMacAddress('hello-world-mac'), false);
    assert.strictEqual(isMacAddress('mac:address:test'), false);
  });

  it('accepts both uppercase and lowercase consistently', () => {
    assert.strictEqual(isMacAddress('aa:bb:cc:dd:ee:ff'), true);
    assert.strictEqual(isMacAddress('AA:BB:CC:DD:EE:FF'), true);
    assert.strictEqual(isMacAddress('Aa:Bb:Cc:Dd:Ee:Ff'), true);
  });
});
