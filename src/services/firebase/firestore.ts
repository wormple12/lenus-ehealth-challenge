import { doc, getDoc, setDoc } from '@firebase/firestore';
import { firestore } from './firebase.config';

class ChartDatabase {
    /* async getSearch(): Promise<SWSearch> {
        const userId = getCurrentUserID();
        if (userId) {
            const docSnap = await getDoc(doc(firestore, 'tempData', 'users', userId, 'SWSearch'));
            if (docSnap.exists()) return docSnap.data() as SWSearch;
        }
        return defaultSWSearch;
    }
    async updateSearch(search: SWSearch): Promise<void> {
        const userId = getCurrentUserID();
        if (userId)
            await setDoc(doc(firestore, 'tempData', 'users', userId, 'SWSearch'), search);
    } */
}

export default new ChartDatabase();