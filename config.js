import firebase from "firebase";
require("@firebase/firestore");
const firebaseConfig = {
  apiKey: "AIzaSyAmHJAHae7_IPcP2rha4pHf7I9uKYiD1Cw",
  authDomain: "project-71-7ad7a.firebaseapp.com",
  projectId: "project-71-7ad7a",
  storageBucket: "project-71-7ad7a.appspot.com",
  messagingSenderId: "367378300244",
  appId: "1:367378300244:web:33c80219df34f7fb50dcc1"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
