type TypeConverted = 'celcius' | 'farenheit';

const tempConverter = (temp: number, type: TypeConverted): number | null => {
    // Kelvin to Celcius
    if (type === 'celcius') return Number((temp - 273.15).toFixed());

    return null;
};

export default tempConverter;
