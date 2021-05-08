import { firebase } from '@/infrastructures/firebase'

const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp()

export { serverTimestamp }
