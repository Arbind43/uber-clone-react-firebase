


import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'


const firebaseConfig = {
apiKey: "REPLACE_WITH_YOUR_API_KEY",
authDomain: "REPLACE_WITH_YOUR_AUTH_DOMAIN",
databaseURL: "REPLACE_WITH_YOUR_DATABASE_URL",
projectId: "REPLACE_WITH_YOUR_PROJECT_ID",
storageBucket: "REPLACE_WITH_YOUR_STORAGE_BUCKET",
messagingSenderId: "REPLACE_WITH_YOUR_MESSAGING_SENDER_ID",
appId: "REPLACE_WITH_YOUR_APP_ID"
}


const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getDatabase(app)
export default app