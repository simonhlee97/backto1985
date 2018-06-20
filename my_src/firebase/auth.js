import {auth} from './firebase';

// SIGN UP function
export const doCreateUserWithEmailAndPassword = (email, password) => auth.createUserWithEmailAndPassword(email, password);

// LOG IN
export const doSignInWithEmailAndPassword = (email, password) => auth.signInWithEmailAndPassword(email, password);

// SIGN OUT
export const doSignOut = () => auth.signOut();

