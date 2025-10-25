import { describe, it } from 'node:test';
import assert from 'node:assert';
import { formatCreditCard } from '../../formatting/creditCard';

describe('formatCreditCard', () => {
  it('formats 16-digit card numbers correctly', () => {
    assert.strictEqual(formatCreditCard('1234567812345678'), '1234 5678 1234 5678');
    assert.strictEqual(formatCreditCard('4111111111111111'), '4111 1111 1111 1111');
  });

  it('formats 15-digit card numbers (AmEx) correctly', () => {
    assert.strictEqual(formatCreditCard('378282246310005'), '3782 822463 10005');
  });

  it('removes non-digit characters before formatting', () => {
    assert.strictEqual(formatCreditCard('4111-1111-1111-1111'), '4111 1111 1111 1111');
    assert.strictEqual(formatCreditCard('3782 8224 6310 005'), '3782 822463 10005');
  });

  it('returns empty string for invalid lengths', () => {
    assert.strictEqual(formatCreditCard('123'), '');
    assert.strictEqual(formatCreditCard('11112222333344445555'), '');
    assert.strictEqual(formatCreditCard(''), '');
  });

  it('throws an error if input is not a string', () => {
    assert.throws(() => formatCreditCard(1234567812345678 as any), /Input must be a string/);
    assert.throws(() => formatCreditCard(null as any), /Input must be a string/);
    assert.throws(() => formatCreditCard(undefined as any), /Input must be a string/);
  });
});
