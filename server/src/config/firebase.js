const admin = require('firebase-admin');
const { getStorage } = require('firebase-admin/storage');

const serviceAccount = require('./firebaseAuth.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: process.env.FIREBASE_BUCKET_URL,
});

const bucket = admin.storage().bucket();

module.exports = {
  admin,
  bucket,
};
