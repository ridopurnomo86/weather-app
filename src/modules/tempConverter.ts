const tempConverter = (temp: number): number => {
    // Kelvin to Celcius
    return Number((temp - 273.15).toFixed());
};

export default tempConverter;
