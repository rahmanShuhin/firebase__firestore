import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyA6jgElr_aXoizsu7HH9gTx5ZcWvg_NbAI",
  authDomain: "testing-suhin.firebaseapp.com",
  databaseURL: "https://testing-suhin.firebaseio.com",
  projectId: "testing-suhin",
  storageBucket: "testing-suhin.appspot.com",
  messagingSenderId: "181255432678",
  appId: "1:181255432678:web:ae1354ca3b20fd25d98e27",
  measurementId: "G-MDN8LK74WW",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
