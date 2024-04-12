// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/storage';
import { Timestamp } from 'firebase/firestore'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWMBzfqnOntP6Iuhg0qXpdpZk7Qc9KvdQ",
  authDomain: "dusan-firegram.firebaseapp.com",
  projectId: "dusan-firegram",
  storageBucket: "dusan-firegram.appspot.com",
  messagingSenderId: "162525961038",
  appId: "1:162525961038:web:66758382dd232f0463dc1f"
};

// Initialize Firebase
const app = firebase.default.initializeApp(firebaseConfig)

const projectStorage = firebase.default.storage()
const projectFirestore = firebase.default.firestore()
// const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const timestamp = Timestamp.fromDate(new Date())


export { projectStorage, projectFirestore, timestamp };