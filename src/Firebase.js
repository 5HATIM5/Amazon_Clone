import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAkE78AGPCW3hL5HgHALTXRgfevf76LMDg",
    authDomain: "clone-d543c.firebaseapp.com",
    projectId: "clone-d543c",
    storageBucket: "clone-d543c.appspot.com",
    messagingSenderId: "755203669713",
    appId: "1:755203669713:web:2d4ff76fd41a07d66e0ff0",
    measurementId: "G-Q6MNQXTVKY"
});

const auth = firebase.auth();

export {auth};
