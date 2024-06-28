import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyBA7djGHZIbDK9h8af0UqaeYKhgUFFfcYQ",
    authDomain: "nsc-movie.firebaseapp.com",
    projectId: "nsc-movie",
    storageBucket: "nsc-movie.appspot.com",
    messagingSenderId: "37922813220",
    appId: "1:37922813220:web:b8c0fb71ce37bce7636fb1"
});

export const db = firebase.firestore();
export const auth = firebase.auth();
export default app;