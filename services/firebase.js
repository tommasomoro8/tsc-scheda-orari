const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const credentials = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)

initializeApp({
    credential: cert(credentials),
    storageBucket: "server-ue5.appspot.com"
})

const db = getFirestore()

module.exports = { db }