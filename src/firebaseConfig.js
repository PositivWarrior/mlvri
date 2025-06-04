import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Twoja konfiguracja Firebase
const firebaseConfig = {
	apiKey: 'AIzaSyDZ3bd0PtUzhz190zrKY7_IiYHCto-hBgI',
	authDomain: 'mlvri-bf06e.firebaseapp.com',
	projectId: 'mlvri-bf06e',
	storageBucket: 'mlvri-bf06e.firebasestorage.app',
	messagingSenderId: '81366032112',
	appId: '1:81366032112:web:4180b289326953e0fe2c35',
};

// Inicjalizacja Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
