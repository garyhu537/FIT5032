import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

const app = createApp(App)
app.use(PrimeVue, { theme: { preset: Aura } })
app.use(router)

app.mount('#app')

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
