/**
 * Checks if given latitude and longitude are both valid.
 *
 * @param {number} lat - The latitude to check.
 * @param {number} long - The longitude to check.
 * @returns {boolean} True if both latitude and longitude are valid, false otherwise.
 */

export function isCoordinates(lat: number, long: number): boolean {
  return isLatitude(lat) && isLongitude(long);
}

function isLatitude(num: number): boolean {
  return Number.isFinite(num) && Math.abs(num) <= 90;
}

function isLongitude(num: number): boolean {
  return Number.isFinite(num) && Math.abs(num) <= 180;
}
