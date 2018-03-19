import firebase from 'firebase';

//Log in

export const doSignInWithEmailAndPassword = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);

// Log out

export const doSignOut = () =>
  firebase.auth().signOut();
