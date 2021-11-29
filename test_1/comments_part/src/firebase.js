import firebase from "firebase";
const firebaseApp =firebase.initializeApp({
    apiKey: "AIzaSyAaGAs_i8vrKABFYybgzXyQ407YLec-Qkw",
    authDomain: "comment-section-12d7a.firebaseapp.com",
    databaseURL: "https://comment-section-12d7a.firebaseio.com",
    projectId: "comment-section-12d7a",
    storageBucket: "comment-section-12d7a.appspot.com",
    messagingSenderId: "805095300874",
    appId: "1:805095300874:web:864f37c9f20dacba8de4f3",
    measurementId: "G-3DP4DLYTLX"
})

const db =firebaseApp.firestore();

export default db;