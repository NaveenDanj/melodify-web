import app from "src/config/FirebaseConfig";
import {DocumentData, addDoc, doc, getCountFromServer, getDoc, getFirestore, increment, setDoc, updateDoc } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";
import axios from "axios";
import { SearchResults, UserData } from "src/types/dto";

import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { UserState } from "src/store/slices/UserSlice";
import { PlayList, Search, SearchResult } from "src/types/types";

// const auth = getAuth(app);
const db = getFirestore(app);

export default {

    searchSong : async (queryString:string) => {

        try{
            const url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${queryString}`;
            // const url = `https://api.deezer.com/search?q=${queryString}`;
            const response = await axios.get(url , {
                headers : {
                    "Access-Control-Allow-Origin" : "*"
                }
            });
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

    mainSearch : async (user:UserState , queryString:string) => {

        try{
            const url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${queryString}&limit=10`;
            // const url = `https://api.deezer.com/search?q=${queryString}`;
            const response = await axios.get(url , {
                headers : {
                    "Access-Control-Allow-Origin" : "localhost"
                }
            });
            const res:SearchResults[] = response.data.data;
            const res_out:SearchResults[] = [];
            let count = 0;

            for(let i = 0; i < res.length; i++){
                const q = query(collection(db, "songs"), where("original_title", "==", res[i].title ));
                const snapshot = await getCountFromServer(q);
                
                
                if(snapshot.data().count > 0 ){
                    res[i].destination_path = 'have path'
                }else{
                    res[i].destination_path = ''
                }

                res_out.push(res[i])

                if(count < 1){

                    const q = query(collection(db, "search_results"), where("song_id", "==", res[i].id ));
                    const snapshot = await getCountFromServer(q);
                    
                    if(snapshot.data().count == 0 ){

                        const song:SearchResult = {
                            song_id: res[i].id,
                            title: res[i].title,
                            count: 1,
                            search_string: queryString,
                            artist_id: res[i].artist.id,
                            artist_name: res[i].artist.name,
                            scraper_string: res[i].artist.name + " " + res[i].title,
                            downloaded : res[i].destination_path == '' ? false : true,
                            available : snapshot.data().count == 0 ? false : true
                        }

                        await setDoc( doc(db , "search_results", res[i].id+'') , song);
                        
                    }else{

                        const ref = doc(db, "search_results", res[i].id+'');
                        
                        await updateDoc(ref, {
                            count: increment(1)
                        });

                    }

                }
                
                count++;

            }

            if(res_out.length > 0){
                
                const data:Search = {
                    user_id: user.userData?.uid+'',
                    search_query: queryString,
                    timestamp: Date.now(),
                    result_count: res.length
                }

                await addDoc(collection(db, "search"), data);
            
            }

            return res_out;
        
        }catch(err){
            console.log(err)
            return []
        }


    },

    createPlaylist : async (user:UserData | null , name:string , description:string , songs:SearchResults[]) => {

        try{

            const out:string[] = []

            for(let i = 0;  i < songs.length; i++){

                const q = query(collection(db, "songs"), where("destination_path", "==" , songs[i].destination_path));
    
                const querySnapshot = await getDocs(q);
                let found = false;
                
                querySnapshot.forEach( async(doc) => {
                    if(found == false){
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        found = true;
                        out.push(doc.id)
                    }
                });

            }


            const song:PlayList = {
                name: name,
                ownedBy: user?.uid == undefined ? '' : user?.uid,
                songs: out,
                description
            }
    
            await addDoc(collection(db, "playlist"), song);
            return song

        }catch(err){
            return null
        }

    },

    getPlaylist: async (user: UserData | null , playlistId:string | null) => {

        try{

            if(!playlistId){
                return null
            }

            const ref = doc(db, "playlist", playlistId);
            const snap = await getDoc(ref);
            
            if (!snap.exists()) {
                return null
            }
            
            const data = snap.data()
            
            if(!data){
                return null
            }
            
            if(data.ownedBy != user?.uid){
                return null
            }

            const out = {
                playlistCover : '',
                playlistData : data,
                songs : [] as DocumentData[]
            }

            // fetch song data
            for(let i = 0; i < data.songs.length; i++){
                
                const ref = doc(db, "songs", data.songs[i]);
                const snap = await getDoc(ref);
                const songData = snap.data()

                if(!songData){
                    continue
                }

                if(i == 0){
                    out.playlistCover = songData.meta.album.cover_medium
                }

                out.songs.push(songData)

            }

            return out

        }catch(err){
            return null
        }

    }

}