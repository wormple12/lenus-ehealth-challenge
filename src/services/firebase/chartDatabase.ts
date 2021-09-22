import { doc, collection, getDocs, setDoc, deleteDoc } from '@firebase/firestore';
import { firestore } from './firebase.config';
import { Measurement } from '@Types/Measurement';

export const readFromStore = async (collectionName: string) => {
    return await getDocs(collection(firestore, 'tempData', 'lenus', collectionName));
};

class ChartDatabase {
    async getMeasurements(): Promise<Measurement[]> {
        const querySnap = await readFromStore("measurements");
        return querySnap.docs.map(doc => {
            const { weight } = doc.data();
            return {
                date: new Date(doc.id),
                weight: parseInt(weight)
            };
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