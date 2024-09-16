import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyCtz86-q7QC2i5LanfSBlFrg98_RwGHTR0',
    authDomain: 'week7-yujie.firebaseapp.com',
    projectId: 'week7-yujie',
    storageBucket: 'week7-yujie.appspot.com',
    messagingSenderId: '94841895186',
    appId: '1:94841895186:web:fa82eeb13f38d28f8edbcb'
  }
  
  // Initialize Firebase
  initializeApp(firebaseConfig)
  const db = getFirestore()
  export default db