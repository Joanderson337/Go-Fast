import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAEyLL0DNINs4s24WJnddpZDwXHDZlSPAY',
  authDomain: 'cozinha-e365b.firebaseapp.com',
  projectId: 'cozinha-e365b',
  storageBucket: 'cozinha-e365b.appspot.com',
  messagingSenderId: '373682786871',
  appId: '1:373682786871:web:98113df39a3558febd65b2'
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account'
});
