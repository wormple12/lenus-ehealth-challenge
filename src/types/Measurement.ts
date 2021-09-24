export type Measurement = {
    date: Date,
    weight: number,
}

const minWeight = 1;
const maxWeight = 999;
const minDate = new Date('01/01/2011');
const maxDate = new Date();

export const sortMeasurements = (measurements: Measurement[]): Measurement[] => {
    return measurements.sort((a, b) => b.date.valueOf() - a.date.valueOf());
};

export const isWeightValid = (weight: string): boolean => {
    const weightInt = parseInt(weight);
    if (isNaN(weightInt)) return false;
    return weightInt >= minWeight
        && weightInt <= maxWeight;
}

export const clampWeight = (weight: string): string => {
    const weightInt = parseInt(weight);
    if (isNaN(weightInt)) return "";
    const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
    return clamp(weightInt, minWeight, maxWeight).toString();
}

export const isDateValid = (date: Date): boolean => {
    return (date > minDate || date.toDateString() === minDate.toDateString())
        && (date < maxDate || date.toDateString() === maxDate.toDateString());
};