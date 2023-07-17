import { initializeApp } from "firebase/app";

// console.log('api key -> ' , import.meta.env.VITE_Auth_Domain)

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: import.meta.env.VITE_Auth_Domain,
//   projectId: import.meta.env.VITE_Project_Id,
//   storageBucket: import.meta.env.VITE_Storage_Bucket,
//   messagingSenderId: import.meta.env.VITE_Messaging_Sender_Id,
//   appId: import.meta.env.VITE_App_Id,
//   measurementId: import.meta.env.VITE_Measurement_Id
// };


const firebaseConfig = {
  apiKey: "AIzaSyA-B7rH0Dj7_wvKUFvdMHtN97BQMKoCqk0",
  authDomain: "melodify-78c44.firebaseapp.com",
  projectId: "melodify-78c44",
  storageBucket: "melodify-78c44.appspot.com",
  messagingSenderId: "997455571974",
  appId: "1:997455571974:web:8ac3689b8978070a9be787",
  measurementId: "G-X7QQLY80Y1"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;