import app from "src/config/FirebaseConfig";
import {DocumentData, getFirestore} from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";

const db = getFirestore(app);

export default {

    getMusicPlayableLink : async (id:number) => {
        const q = query(collection(db, "songs"), where("meta.id", "==", id));
        const querySnapshot = await getDocs(q);
        let count = 0;
        let _data:DocumentData | null = null;

        querySnapshot.forEach( async (doc) => {
            console.log(doc.id, " => ", doc.data());
            if (count == 0){
                return _data = doc.data()
            }
            count++
        });

        return _data
        
    },

}