// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNPtSGj5iWcRCnqUEML4My8P1ili5l9Tw",
  authDomain: "my-first-react-project-d1c50.firebaseapp.com",
  databaseURL: "https://my-first-react-project-d1c50-default-rtdb.firebaseio.com",
  projectId: "my-first-react-project-d1c50",
  storageBucket: "my-first-react-project-d1c50.appspot.com",
  messagingSenderId: "995306223631",
  appId: "1:995306223631:web:dbcdc33747af4956318b7a"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp