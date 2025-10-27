import { describe, it } from 'node:test';
import assert from 'node:assert';
import { formatTemperature } from '../../formatting/temperature';

describe.only('formatTemperature', () => {
    it('should convert Celsius to Fahrenheit', () => {
        assert.strictEqual(formatTemperature(0, { from: 'C', to: 'F' }), '32.00°F');
    });

    it('should convert Celsius to Kelvin', () => {
        assert.strictEqual(formatTemperature(100, { from: 'C', to: 'K' }), '373.15K');
    });
    
    it('should convert Fahrenheit to Celsius', () => {
        assert.strictEqual(formatTemperature(32, { from: 'F', to: 'C' }), '0.00°C');
    });

    it('should convert Fahrenheit to Kelvin', () => {
        assert.strictEqual(formatTemperature(212, { from: 'F', to: 'K' }), '373.15K');
    });

    it('should convert Kelvin to Celsius', () => {
        assert.strictEqual(formatTemperature(300, { from: 'K', to: 'C' }), '26.85°C');
    });

    it('should handle precision settings', () => {
        assert.strictEqual(formatTemperature(100, { from: 'C', to: 'K', precision: 0 }), '373K');
    });

    it('should throw error for invalid conversions', () => {
        assert.throws(() => formatTemperature(100, { from: 'C', to: 'X' }), /Invalid conversion from C to X./);
    });

    it('should throw error for non-numeric value', () => {
        assert.throws(() => formatTemperature(NaN, { from: 'C', to: 'K' }), /Invalid temperature value./);
    });
});
