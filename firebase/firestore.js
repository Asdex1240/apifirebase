const { doc, setDoc } = require('firebase/firestore/lite');
const firebaseConfig = require('../keys/keyfirebase')
const db = firebaseConfig.db;

async function uploadMessage(data, id){
    try {
        const path = `principal/528187994962/mensajes/${id}`;
        const docRef = doc(db, path)
        await setDoc(docRef, data);
        console.log('Datos arriba')
    } catch (error) {
        console.error(error);
    }
}

module.exports = {uploadMessage}
