import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbfPqt3ees85T_8ziBVT413WweXWIqjTw",
  authDomain: "kumo-metrics.firebaseapp.com",
  projectId: "kumo-metrics",
  storageBucket: "kumo-metrics.appspot.com",
  messagingSenderId: "864768427793",
  appId: "1:864768427793:web:1114466be1264808292eb0",
  measurementId: "G-Q5ZV7FZP3X"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
