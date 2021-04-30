import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional...............................
const firebaseConfig = {
  apiKey: "AIzaSyC67cljja0DPDD59CA88AdnWx3XlHtOn60",
  authDomain: "disneyplus-clone-9bcc6.firebaseapp.com",
  projectId: "disneyplus-clone-9bcc6",
  storageBucket: "disneyplus-clone-9bcc6.appspot.com",
  messagingSenderId: "492050260538",
  appId: "1:492050260538:web:0f224e266d8aef34cbcb03",
  measurementId: "G-D1C7P135HE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };

export default db;
