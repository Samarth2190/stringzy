function formatTemperature(value: number, options: { from: string; to: string; precision?: number }): string {
    const { from, to, precision = 2 } = options;
    const conversions: Record<string, (value: number) => number> = {
        'C_F': (v) => (v * 9) / 5 + 32,
        'C_K': (v) => v + 273.15,
        'F_C': (v) => ((v - 32) * 5) / 9,
        'F_K': (v) => ((v - 32) * 5) / 9 + 273.15,
        'K_C': (v) => v - 273.15,
        'K_F': (v) => ((v - 273.15) * 9) / 5 + 32
    };
    
    const conversionKey = `${from}_${to}`;
    const convert = conversions[conversionKey];
    
    if (!convert) {
        throw new Error(`Invalid conversion from ${from} to ${to}.`);
    }

    if (typeof value !== 'number' || isNaN(value)) {
        throw new Error('Invalid temperature value.');
    }

    const convertedValue = convert(value);
    if (to === 'K') {
        return `${convertedValue.toFixed(precision)}K`;
    }
    return `${convertedValue.toFixed(precision)}°${to}`;
}

export { formatTemperature };
