import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA-tQj6yHsK4bEJH4WZBDGP3ltoK37I0jE",
    authDomain: "imagetester-f76c0.firebaseapp.com",
    databaseURL: "https://imagetester-f76c0.firebaseio.com",
    projectId: "imagetester-f76c0",
    storageBucket: "imagetester-f76c0.appspot.com",
    messagingSenderId: "365046697158",
    appId: "1:365046697158:web:1dee0f2d5be616128d5bc7",
    measurementId: "G-2Q44TCJ81Y"
};

firebase.initializeApp(firebaseConfig);



export default firebase;



