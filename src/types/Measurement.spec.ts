import { Measurement, minWeight, maxWeight, sortMeasurements, clampWeight } from "./Measurement";

const testData: Measurement[] = [
    { date: new Date(2021, 9, 20), weight: 69 },
    { date: new Date(2021, 9, 22), weight: 70 },
    { date: new Date(2021, 9, 7), weight: 75 },
    { date: new Date(2021, 8, 5), weight: 82 },
];

export default function Measurement_test() {
    describe('sortMeasurements', () => {
        it('should sort a list of Measurement objects after date, newest to oldest', () => {
            const result = sortMeasurements(testData);

            expect(result[0].date).to.equal(testData[1].date);
            expect(result[1].date).to.equal(testData[0].date);
            expect(result[2].date).to.equal(testData[2].date);
            expect(result[3].date).to.equal(testData[3].date);
        });
    });

    describe('clampWeight', () => {
        it('should clamp a stringified number between a min and max value, and return as another stringified number', () => {
            expect(clampWeight(
                (minWeight - 1).toString()
            )).to.equal(minWeight.toString());
            expect(clampWeight(
                (maxWeight + 1).toString()
            )).to.equal(maxWeight.toString());
            expect(clampWeight("26")).to.equal("26");
            expect(clampWeight("101")).to.equal("101");
        });
    });
}