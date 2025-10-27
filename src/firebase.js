// src/firebase.js
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// (ঐচ্ছিক) analytics চাইলে নিচে try/catch সহ ব্যবহার করো

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID, // optional
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()

// Optional: Analytics (browser-only, SSR/localhost errors এড়াতে try/catch)
let analytics
try {
  if (typeof window !== 'undefined' && import.meta.env.VITE_FIREBASE_MEASUREMENT_ID) {
    const { getAnalytics } = await import('firebase/analytics') // Vite supports dynamic import
    analytics = getAnalytics(app)
  }
} catch (e) {
  // analytics না পেলেও অ্যাপ চলবে
  console.info('Analytics not initialized:', e?.message)
}

export { analytics }
