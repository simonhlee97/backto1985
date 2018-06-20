import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyAa1X9dXkAClJigONAUD4mXKuPvDnF_VFY",
    authDomain: "hillvalleyhigh-80376.firebaseapp.com",
    databaseURL: "https://hillvalleyhigh-80376.firebaseio.com",
    projectId: "hillvalleyhigh-80376",
    storageBucket: "",
    messagingSenderId: "580681021277"
};
// const prodConfig = {
//   apiKey: YOUR_API_KEY,
//   authDomain: YOUR_AUTH_DOMAIN,
//   databaseURL: YOUR_DATABASE_URL,
//   projectId: YOUR_PROJECT_ID,
//   storageBucket: '',
//   messagingSenderId: YOUR_MESSAGING_SENDER_ID,
// };

// const devConfig = {
//   apiKey: YOUR_API_KEY,
//   authDomain: YOUR_AUTH_DOMAIN,
//   databaseURL: YOUR_DATABASE_URL,
//   projectId: YOUR_PROJECT_ID,
//   storageBucket: '',
//   messagingSenderId: YOUR_MESSAGING_SENDER_ID,
// };

// const config = process.env.NODE_ENV === 'production'
//   ? prodConfig
//   : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
