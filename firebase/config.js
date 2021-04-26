import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDdysB5UcOPund_WWGn2rNMvkepmTOoiVk",
  authDomain: "kumo-metrics-b43eb.firebaseapp.com",
  projectId: "kumo-metrics-b43eb",
  storageBucket: "kumo-metrics-b43eb.appspot.com",
  messagingSenderId: "675448634834",
  appId: "1:675448634834:web:30b385ec407f1bb595dc0b",
  measurementId: "G-KF3D06GWVD"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
