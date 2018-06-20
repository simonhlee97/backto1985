
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAa1X9dXkAClJigONAUD4mXKuPvDnF_VFY",
    authDomain: "hillvalleyhigh-80376.firebaseapp.com",
    databaseURL: "https://hillvalleyhigh-80376.firebaseio.com",
    projectId: "hillvalleyhigh-80376",
    storageBucket: "",
    messagingSenderId: "580681021277"
};

// if (!firebase.apps.length) {
//     firebase.initializeApp(config);
// }
firebase.initializeApp(config);

export const auth = firebase.auth();

export default firebase;
