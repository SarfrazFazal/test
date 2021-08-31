import * as firebase from "firebase/app"
import "firebase/firestore"
const app = firebase.initializeApp({
    apiKey: "AIzaSyCGQezsK0U541aH2jfBoGamrzz6qmLRNs8",
    authDomain: "sarfraz-91109.firebaseapp.com",
    projectId: "sarfraz-91109",
    storageBucket: "sarfraz-91109.appspot.com",
    messagingSenderId: "1045262813081",
    appId: "1:1045262813081:web:ee9646fb4f4478e9553508",
    measurementId: "G-Z313B8HY4B"
  })
const db = app.firestore()
export{app,db}