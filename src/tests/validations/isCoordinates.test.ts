import { isCoordinates } from '../../validations/isCoordinates';

describe('isCoordinates', () => {
  it('returns true for valid coordinates', () => {
    expect(isCoordinates(48.8582, 2.2945)).toBe(true);
    expect(isCoordinates(40.748817, -73.985428)).toBe(true);
  });

  it('returns false for invalid coordinates', () => {
    expect(isCoordinates(200, 200)).toBe(false);
    expect(isCoordinates(-200, -200)).toBe(false);
  });
});