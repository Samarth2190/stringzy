/**
 * Checks if a number is negative
 */
export function isNegative(num: number): boolean {
    return num < 0;
}

/**
 * Gets the highest order of magnitude for a number
 * @example getOrderOfMagnitude(1234) returns 1000
 * @example getOrderOfMagnitude(567) returns 100
 */
export function getOrderOfMagnitude(num: number): number {
    const absNum = Math.abs(num);
    if (absNum >= 1_000_000_000_000) return 1_000_000_000_000;
    if (absNum >= 1_000_000_000) return 1_000_000_000;
    if (absNum >= 1_000_000) return 1_000_000;
    if (absNum >= 1_000) return 1_000;
    if (absNum >= 100) return 100;
    if (absNum >= 10) return 10;
    return 1;
}