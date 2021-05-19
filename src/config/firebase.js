import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDW7NFZtnXgsVywpcMFsh2HAxgy_062KxM",
    authDomain: "ecommerce-react-c2fa5.firebaseapp.com",
    projectId: "ecommerce-react-c2fa5",
    storageBucket: "ecommerce-react-c2fa5.appspot.com",
    messagingSenderId: "249948593781",
    appId: "1:249948593781:web:6c579f646ff73bd46d223c"
};


// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}

firebase.auth = firebase.auth();
firebase.db = firebase.firestore();

export default firebase;
