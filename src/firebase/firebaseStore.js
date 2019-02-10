import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyA7vUkKgr2TRl64nYmKVkGBTKCaCxAOgoE',
  authDomain: 'unitra-810c5.firebaseapp.com',
  databaseURL: 'https://unitra-810c5.firebaseio.com',
  projectId: 'unitra-810c5',
  storageBucket: 'unitra-810c5.appspot.com',
  messagingSenderId: '92478615117',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const databaseRef = firebase.database().ref();
export const itemsRef = databaseRef.child('items');
