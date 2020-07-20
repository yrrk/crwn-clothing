import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyD8EIArKNSA36arkdfdAo_Qr7VnzGun4u0',
  authDomain: 'crwn-db-c88de.firebaseapp.com',
  databaseURL: 'https://crwn-db-c88de.firebaseio.com',
  projectId: 'crwn-db-c88de',
  storageBucket: 'crwn-db-c88de.appspot.com',
  messagingSenderId: '1000183034381',
  appId: '1:1000183034381:web:581e08ba13d665c0ae5b44',
  measurementId: 'G-HQWRVFJGJK',
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
