import app from "src/config/FirebaseConfig";
import { getAuth , signInWithEmailAndPassword , onAuthStateChanged , createUserWithEmailAndPassword  } from "firebase/auth";

const auth = getAuth(app);

export default {
    login : async (email:string , password:string) => {
        // signInWithEmailAndPassword(auth, email, password)
        // .then((userCredential) => {
        //    return userCredential.user;
        // })
        // .catch((error) => {
        //     console.log("login error -> ", error.message)
        //     return error;
        // });

        try{
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            return userCredential.user;
        }catch(err){
            return err
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
