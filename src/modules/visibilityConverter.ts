export const visibilityConverter = (visibility: number) => {
    return Number(visibility * 0.000621371).toFixed(1);
};
