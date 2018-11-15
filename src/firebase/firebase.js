import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyCsE02H1lFtW2RaRygITvr-uPUySj6aNco",
  authDomain: "wayfarer-38067.firebaseapp.com",
  databaseURL: "https://wayfarer-38067.firebaseio.com",
  projectId: "wayfarer-38067",
  storageBucket: "wayfarer-38067.appspot.com",
  messagingSenderId: "468268311649"
  };
if (!firebase.apps.length){
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();
export {
  auth,
  db,
};