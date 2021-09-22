import ChartDatabase, * as db_methods from './chartDatabase';

/**
 * Helper method to stub the database fetching method to instead return the
 * given data, mimicking the original firestore method's response.
 */
const stubDatabaseCall = (testData) => {
    cy.stub(db_methods, 'readFromStore').resolves({
        docs: testData.map(m => {
            return {
                id: m.date,
                data: () => m
            };
        })
    });
};

export default function chartDatabase_test() {
    describe('ChartDatabase.getMeasurements', () => {
        beforeEach(() => {
            cy.fixture('measurements').as('measurementsJson').then(async testData => {
                stubDatabaseCall(testData);
            });
        })
        it('should return correct data as Measurement[]', async () => {
            const measurements = await ChartDatabase.getMeasurements();
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
}