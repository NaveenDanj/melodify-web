import app from "src/config/FirebaseConfig";
import { getFirestore } from "firebase/firestore";
import { signOut , getAuth , signInWithEmailAndPassword , onAuthStateChanged , createUserWithEmailAndPassword  } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const auth = getAuth(app);
const db = getFirestore(app);

export default {

    login : async (email:string , password:string) => {
        try{
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            
            const data = {
                email : userCredential.user.email,
                displayName : '',
                photoURL : "",
                uid : userCredential.user.uid,
                phoneNumber : ""
            }

            return {
                "success" : true,
                "user" : data,
                "error" : ''
            }
        
        }catch(err){
            return {
                "success" : false,
                "error" : err
            }
        }
    },

    checkAuthState : () => {
        onAuthStateChanged(auth, (user) => {
            console.log('user is -> ' , user)
            if (user) {
              return user;
            } else {
              return null;
            }
        });
    },

    registerByEmailAndPassword : async (email:string , password:string , profileName:string) => {
        try{
            const user = await createUserWithEmailAndPassword(auth, email, password)
            
            console.log("user -> " , user.user)

            const data = {
                email : user.user.email,
                displayName : profileName,
                photoURL : "",
                uid : user.user.uid,
                phoneNumber : ""
            }
            
            const docRef = await setDoc( doc(db, "users", user.user.uid) , data);
            
            return {
                "success" : true,
                "user" : docRef,
                "error" : ''
            }

        }catch(err){
            
            return {
                "success" : false,
                "error" : err
            }
        
        }
    },

    logout : async () => {
        try{
            await signOut(auth);
            return true
        }catch(err){
            return false
        }
    }

}
