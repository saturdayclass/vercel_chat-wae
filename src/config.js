import firebase from 'firebase'

const credential = {
    apiKey: "AIzaSyAA5mD0-DSyfslYpft0SS1uMhstViDJFSM",
    authDomain: "chatsaja-32fbe.firebaseapp.com",
    projectId: "chatsaja-32fbe",
    storageBucket: "chatsaja-32fbe.appspot.com",
    messagingSenderId: "610578546997",
    appId: "1:610578546997:web:2ae360a489f39bd3cacc7c",
    measurementId: "G-2Z6DKTR4Q6"
}

firebase.initializeApp(credential)

export const db = firebase.database()