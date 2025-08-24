import { describe, it } from 'node:test';
import assert from 'node:assert';
import { isEmail } from '../../validations/isEmail';

describe('isEmail (SMTPUTF8)', () => {
  it('accepts emoji in local-part by default', () => {
    assert.strictEqual(isEmail('I❤️CHOCOLATE@example.com'), true);
  });

  it('rejects emoji in local-part when smtpUTF8 is explicitly disabled', () => {
    assert.strictEqual(isEmail('I❤️CHOCOLATE@example.com', { smtpUTF8: false }), false);
  });
});
