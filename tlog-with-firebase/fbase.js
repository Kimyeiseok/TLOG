import * as firebase from "firebase";
import "firebase/auth";
import 'firebase/firestore';


  // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBRheIFG1kbgCymTIZHuiS3tvTClXaK7hM",
    authDomain: "tkdboard-bdf6f.firebaseapp.com",
    projectId: "tkdboard-bdf6f",
    storageBucket: "tkdboard-bdf6f.appspot.com",
    messagingSenderId: "256925652111",
    appId: "1:256925652111:web:8dfea5f62de922fcab8cfa"
  };
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth();
export const storeService = firebase.firestore();