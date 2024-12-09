import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore/lite";
import { initializeApp  } from "firebase/app";

// ? Configuración brindada al registrar app en la consola de Google
const firebaseConfig = {
  apiKey: "AIzaSyAUWtoqpPpQk521IRslCYPTNK-GFlizT9c",
  authDomain: "react-project-f7457.firebaseapp.com",
  projectId: "react-project-f7457",
  storageBucket: "react-project-f7457.firebasestorage.app",
  messagingSenderId: "86849088097",
  appId: "1:86849088097:web:e0ad871152365d61565820",
  measurementId: "G-09SXC8TLBC"
};

// Inicializa Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

// ? Doc: https://firebase.google.com/docs/auth/web/start 
// * Seleccionar providers de autenticación en la consola de Google
export const FirebaseAuth = getAuth( FirebaseApp);

// ? Doc: https://firebase.google.com/docs/firestore/quickstart#web_1
export const FirebaseDB = getFirestore( FirebaseApp );