import firebase from 'firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAcL2QIIFm8ruWjE7tI0X4iT6b27PG0fXw",
    authDomain: "fb-react-6c922.firebaseapp.com",
    projectId: "fb-react-6c922",
    storageBucket: "fb-react-6c922.appspot.com",
    messagingSenderId: "388880416196",
    appId: "1:388880416196:web:3dde172262d51fe580b891"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = app.firestore()
const storage = firebase.storage()

export { db, storage }

