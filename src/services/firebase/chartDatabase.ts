import { doc, collection, setDoc, deleteDoc, onSnapshot, query, orderBy, DocumentData, QuerySnapshot, Unsubscribe } from '@firebase/firestore';
import { firestore } from './firebase.config';
import { Measurement, sortMeasurements } from '@Types/Measurement';

export const transformSnapshotToMeasurements = (querySnapshot: QuerySnapshot<DocumentData>): Measurement[] => {
    return querySnapshot.docs.map(docSnapshot => {
        const { weight } = docSnapshot.data();
        return {
            date: new Date(docSnapshot.id),
            weight: parseInt(weight)
        };
    });
};

class ChartDatabase {
    async streamMeasurements(
        setMeasurements: (measurements: Measurement[]) => void,
    ): Promise<Unsubscribe> {
        const q = query(collection(firestore, 'tempData', 'lenus', "measurements"));
        return onSnapshot(q, {
            next: querySnapshot => {
                const updatedData = transformSnapshotToMeasurements(querySnapshot);
                const orderedData = sortMeasurements(updatedData);
                setMeasurements(orderedData);
            },
        });
    }

    async setMeasurement(m: Measurement): Promise<void> {
        await setDoc(doc(firestore, 'tempData', 'lenus', 'measurements', m.date.toDateString()), {
            weight: m.weight
        });
    }

    async deleteMeasurement(date: Date): Promise<void> {
        await deleteDoc(doc(firestore, 'tempData', 'lenus', 'measurements', date.toDateString()));
    }
}

export default new ChartDatabase();