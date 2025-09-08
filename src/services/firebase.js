// Configuración de Firebase (correo/contraseña)
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB0Z42X8Oocm2zAgGOP3C-AUMODxPSzR2I",
  authDomain: "mercat-2a2c5.firebaseapp.com",
  projectId: "mercat-2a2c5",
  storageBucket: "mercat-2a2c5.appspot.com",
  messagingSenderId: "989425238020",
  appId: "1:989425238020:web:f7737c3cfc329e4242f551",
  measurementId: "G-35JJTRR4E0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
