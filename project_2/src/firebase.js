import firebase from "firebase";

const firebaseApp =firebase.initializeApp({
    apiKey: "AIzaSyChp7gv5L_UGdosD8xaYogsMZc6YAYtbRk",
    authDomain: "teams-clone-827d9.firebaseapp.com",
    projectId: "teams-clone-827d9",
    storageBucket: "teams-clone-827d9.appspot.com",
    messagingSenderId: "497449219921",
    appId: "1:497449219921:web:78f7b200da639735008570",
    measurementId: "G-1KZZZ5CCC7"
});

const db =firebaseApp.firestore();

export default db;