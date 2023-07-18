// import app from "src/config/FirebaseConfig";
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
// import { collection, query, where, getDocs } from "firebase/firestore";
import axios from "axios";


// const auth = getAuth(app);
// const db = getFirestore(app);

export default {

    searchSong : async (queryString:string) => {
        
        try{
            const q = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${queryString}`;
            return axios.get(q)
        }catch(err){
            return null
        }

    }


}