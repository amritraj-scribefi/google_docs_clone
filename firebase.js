import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDrqWIDbp2rcmxkH_Rfs9MLBvgMMZKZ1Co",
  authDomain: "docs-9099a.firebaseapp.com",
  projectId: "docs-9099a",
  storageBucket: "docs-9099a.appspot.com",
  messagingSenderId: "565986777274",
  appId: "1:565986777274:web:2aafff233819da72c38a83"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app;

const db = app.firestore();

export { db }