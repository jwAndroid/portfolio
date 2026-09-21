import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDvIMNKjniW74DfmTVaLS4hEr4L32hE71U",
  authDomain: "portfoilo-29cc4.firebaseapp.com",
  projectId: "portfoilo-29cc4",
  storageBucket: "portfoilo-29cc4.appspot.com",
  messagingSenderId: "990315075865",
  appId: "1:990315075865:web:8af3c800aa740d5e758d88",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
