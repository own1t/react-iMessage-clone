import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAtCHG8wQltvh5l68CMeGNpbcd0emXk8zs",
  authDomain: "imessage-clone-2db4c.firebaseapp.com",
  databaseURL: "https://imessage-clone-2db4c.firebaseio.com",
  projectId: "imessage-clone-2db4c",
  storageBucket: "imessage-clone-2db4c.appspot.com",
  messagingSenderId: "86390442161",
  appId: "1:86390442161:web:8788a820ad6a308ec03a90",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
