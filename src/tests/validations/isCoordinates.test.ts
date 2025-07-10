import { describe, it } from 'node:test';
import assert from 'node:assert';
import { isCoordinates } from '../../validations/isCoordinates';

describe('isCoordinates', () => {
  it('returns true for valid coordinates', () => {
    assert.strictEqual(isCoordinates(48.8582, 2.2945), true);
    assert.strictEqual(isCoordinates(40.748817, -73.985428), true);
  });
  it('returns false for invalid coordinates', () => {
    assert.strictEqual(isCoordinates(200, 200), false);
    assert.strictEqual(isCoordinates(-200, -200), false);
  });
});
