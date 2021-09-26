import { Measurement } from '@Types/Measurement';
import * as db_methods from './chartDatabase';

/**
 * Helper method to get an object that mimics a Firestore snapshot without
 * actually being one.
 */
const getSnapshotMimic = (testData: Measurement[]) => {
    return {
        docs: testData.map(m => {
            return {
                id: m.date,
                data: () => m
            };
        })
    };
};

export default function chartDatabase_test() {
    describe('transforming firestore query snapshot to measurements', () => {
        it('should return correct data as Measurement[]', () => {
            cy.fixture('measurements').as('measurementsJson').then(async testData => {
                // @ts-ignore: let the snapshot mimic bypass type checking
                const measurements = db_methods.transformSnapshotToMeasurements(getSnapshotMimic(testData));

                expect(measurements).to.have.lengthOf(4);
                expect(measurements[0]).to.have.all.keys('date', 'weight');
                expect(measurements[1].date.toDateString()).to.equal(
                    new Date("Wed Sep 22 2021").toDateString(),
                    "The measurement's date should have the correct value and format"
                );
                expect(measurements[2].weight).to.equal(
                    75,
                    "The measurement's weight should be correct"
                );
            });
        });
    });
}