import { firebase } from '@firebase/app'
import '@firebase/firestore'
import '@firebase/auth'

const config = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID
}

export const firebaseApp = firebase.initializeApp(config)
export const db = firebaseApp.firestore()
export function auth () {
  return firebaseApp.auth()
}

const settings = {
  timestampsInSnapshots: true
}

db.settings(settings)
