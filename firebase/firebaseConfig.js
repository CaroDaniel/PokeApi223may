import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
apiKey: "AIzaSyBkS1nR4LzvH4xQwOSK38DaeQHaYJZAsdc",
  authDomain: "cardsapi-8c378.firebaseapp.com",
  projectId: "cardsapi-8c378",
  storageBucket: "cardsapi-8c378.firebasestorage.app",
  messagingSenderId: "104922094311",
  appId: "1:104922094311:web:022d4ffcaaf39d057ee042"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };