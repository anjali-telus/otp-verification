import firebase from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBb35DAwa5aAEiI_y_Dkeu-uyqyTVTb06Y",
  authDomain: "otp-assignment.firebaseapp.com",
  projectId: "otp-assignment",
  storageBucket: "otp-assignment.appspot.com",
  messagingSenderId: "489880390323",
  appId: "1:489880390323:web:bdafcc49c278ccc967bec6",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
