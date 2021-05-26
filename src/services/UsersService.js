import firebase from '../config/firebase'

export function loginWithEmailAndPassword(email, pass) {
    return firebase.auth.signInWithEmailAndPassword(email, pass)
}
