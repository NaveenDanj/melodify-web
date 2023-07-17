import { initializeApp } from "firebase/app";

console.log('api key -> ' , import.meta.env.VITE_API_KEY)

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_Auth_Domain,
  projectId: import.meta.env.VITE_Project_Id,
  storageBucket: import.meta.env.VITE_Storage_Bucket,
  messagingSenderId: import.meta.env.VITE_Messaging_Sender_Id,
  appId: import.meta.env.VITE_App_Id,
  measurementId: import.meta.env.VITE_Measurement_Id
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;