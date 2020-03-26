 import * as firebase from "firebase";
 
 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyDEGAmS5Sie3Yh9Ws9IFKRtZ1RkXcpkNlA",
  authDomain: "grey4ukapp.firebaseapp.com",
  databaseURL: "https://grey4ukapp.firebaseio.com",
  projectId: "grey4ukapp",
  storageBucket: "grey4ukapp.appspot.com",
  messagingSenderId: "476601033519",
  appId: "1:476601033519:web:a315334ff07abdd5a237da"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);