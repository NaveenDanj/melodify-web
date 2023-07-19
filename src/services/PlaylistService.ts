import app from "src/config/FirebaseConfig";
import {getCountFromServer, getFirestore } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";
import axios from "axios";
import { SearchResults } from "src/types/dto";

import { getDownloadURL, getStorage, ref } from "firebase/storage";

// const auth = getAuth(app);
const db = getFirestore(app);

export default {

    searchSong : async (queryString:string) => {

        try{
            const url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${queryString}`;
            // const url = `https://api.deezer.com/search?q=${queryString}`;
            const response = await axios.get(url);
            const res:SearchResults[] = response.data.data;
            const res_out:SearchResults[] = [];

            for(let i = 0; i < res.length; i++){
                console.log('original_title -> ' , res[i].title , "artist -> " , res[i].artist.name)
                const q = query(collection(db, "songs"), where("original_title", "==", res[i].title ));
    
                const querySnapshot = await getDocs(q);
                let found = false;
                
                querySnapshot.forEach( async(doc) => {
                    console.log("got data -> " , doc.data())
                    const data:unknown= doc.data();
                    if(found == false){
                        // const url:string = await getDownloadLink(data.destination_path)
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        res[i].destination_path = data.destination_path
                        
                        res_out.push(res[i])
                        found = true;
                    }
                });

                break;
            }


            return res_out;
        }catch(err){
            return null
        }

    },

    getDownloadLink: (path:string) => {
        const storage = getStorage();
        const pathReference = ref(storage, path);
        return getDownloadURL(pathReference)
    },

    mainSearch : async (queryString:string) => {

        try{
            // const url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${queryString}`;
            const url = `https://api.deezer.com/search?q=${queryString}`;
            const response = await axios.get(url);
            const res:SearchResults[] = response.data.data;
            const res_out:SearchResults[] = [];

            for(let i = 0; i < res.length; i++){
                const q = query(collection(db, "songs"), where("original_title", "==", res[i].title ));
                const snapshot = await getCountFromServer(q);
                
                
                if(snapshot.data().count > 0 ){
                    res[i].destination_path = 'have path'
                }else{
                    res[i].destination_path = ''
                }

                res_out.push(res[i])

            }

            return res_out;
        
        }catch(err){
            console.log(err)
            return []
        }


    }

}


// async function getDownloadLink(path:string){
//     const storage = getStorage();
//     const pathReference = ref(storage, path);
//     return getDownloadURL(pathReference)
// }