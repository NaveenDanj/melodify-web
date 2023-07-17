import app from "src/config/FirebaseConfig";
import { getAuth , signInWithEmailAndPassword , onAuthStateChanged , createUserWithEmailAndPassword  } from "firebase/auth";

const auth = getAuth(app);

export default {

    login : async (email:string , password:string) => {
        try{
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            
            return {
                "success" : true,
                "user" : userCredential.user
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
            if (user) {
              return user;
            } else {
              return null;
            }
        });
    },

    registerByEmailAndPassword : async (email:string , password:string) => {
        try{
            const user = await createUserWithEmailAndPassword(auth, email, password)
            return user;
        }catch(err){
            return err
        }
    }

}
