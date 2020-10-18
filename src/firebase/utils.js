import firebase from 'firebase/app';
import 'firebase/auth';

import { firebaseConfig } from './firebase-config';

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(GoogleProvider);
