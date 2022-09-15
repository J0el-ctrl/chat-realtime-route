import { app } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';







const firebaseConfig = {
    apiKey: "AIzaSyAQopGWHLIxiEaaWZdw1iJruric6chpyGk",
    authDomain: "chat-tiempo-real-5d0be.firebaseapp.com",
    projectId: "chat-tiempo-real-5d0be",
    storageBucket: "chat-tiempo-real-5d0be.appspot.com",
    messagingSenderId: "328056967394",
    appId: "1:328056967394:web:f71aa7ee198d1c35c88ebb"
  };
  
  // Initialize Firebase
  const db = app(firebaseConfig);
  exports ={db}
//   const db = getFirestore(app);