const firebase = require('firebase/app');
const firestore = require('firebase/firestore/lite');

const firebaseConfig = {
    apiKey: "AIzaSyC_jtyYYj2QuIGfKjr1zRYHnFR76qS4IGY",
    authDomain: "crm-whatsapp-25d78.firebaseapp.com",
    projectId: "crm-whatsapp-25d78",
    storageBucket: "crm-whatsapp-25d78.appspot.com",
    messagingSenderId: "726949066817",
    appId: "1:726949066817:web:3770dd05f168a10f8c6ec0",
    measurementId: "G-XDCYXLFY7W"
  };

const app = firebase.initializeApp(firebaseConfig)
const db = firestore.getFirestore(app)

module.exports = { app, db }