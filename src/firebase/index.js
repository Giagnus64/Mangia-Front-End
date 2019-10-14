import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    authDomain: "mangia-b5d29.firebaseapp.com",
    databaseURL: "https://mangia-b5d29.firebaseio.com",
    projectId: "mangia-b5d29",
    storageBucket: "mangia-b5d29.appspot.com",
    messagingSenderId: "141432998388",
    appId: "1:141432998388:web:dbfc2caa4812a6564951a1",
    measurementId: "G-T6C1B6SDKP"
};

firebase.initializeApp(firebaseConfig);



export default firebase;
