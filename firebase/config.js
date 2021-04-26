import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAYhFOG6wzF8C6PqOX6nUvi3N4iTgQjYc0",
    authDomain: "athlete-app-38bb0.firebaseapp.com",
    projectId: "athlete-app-38bb0",
    storageBucket: "athlete-app-38bb0.appspot.com",
    messagingSenderId: "794713352596",
    appId: "1:794713352596:web:dd66c867697199c3970781",
    measurementId: "G-72Q1RTSTBV"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
