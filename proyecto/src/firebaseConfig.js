import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCvJIx2aRH_UqhsvU9K6gQqK2ihGs0tZ6c",
  authDomain: "ghibli-2.firebaseapp.com",
  projectId: "ghibli-2",
  storageBucket: "ghibli-2.firebasestorage.app",
  messagingSenderId: "815856495990",
  appId: "1:815856495990:web:86092b433469e417ca1e57"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // ✅ ¡Esto es necesario!

export { auth, db };