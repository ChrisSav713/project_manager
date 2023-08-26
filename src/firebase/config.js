import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBG9XbVtpxlOGtE5wg3QPJvojAMZVftrE8',
  authDomain: 'projectmanager-a6528.firebaseapp.com',
  projectId: 'projectmanager-a6528',
  storageBucket: 'projectmanager-a6528.appspot.com',
  messagingSenderId: '573526059262',
  appId: '1:573526059262:web:317cd156e3402f4b385daf'
}

firebase.initializeApp(firebaseConfig)
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timestamp }
