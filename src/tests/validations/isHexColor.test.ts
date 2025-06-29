import { describe, it } from 'node:test';
import assert from 'node:assert';
import { isHexColor } from '../../validations/isHexColor';

describe('isHexColor', () => {
  it('returns true for valid hex colors', () => {
    assert.strictEqual(isHexColor('#abc'), true);
    assert.strictEqual(isHexColor('abc'), true);
    assert.strictEqual(isHexColor('#a1b2c3'), true);
    assert.strictEqual(isHexColor('a1b2c3'), true);
    assert.strictEqual(isHexColor('#A1B2C3'), true);
    assert.strictEqual(isHexColor('   #fff   '), true);
  });

  it('returns false for invalid hex colors', () => {
    assert.strictEqual(isHexColor('#12G'), false);
    assert.strictEqual(isHexColor('xyz'), false);
    assert.strictEqual(isHexColor('#ab'), false);
    assert.strictEqual(isHexColor('#12345'), false);
    assert.strictEqual(isHexColor('12345'), false);
    assert.strictEqual(isHexColor('#1234567'), false);
    assert.strictEqual(isHexColor('1234567'), false);
    assert.strictEqual(isHexColor('#1234g6'), false);
    assert.strictEqual(isHexColor('1234g6'), false);
    assert.strictEqual(isHexColor(''), false);
    assert.strictEqual(isHexColor('   '), false);
    assert.strictEqual(isHexColor('blue'), false);
  });
});
