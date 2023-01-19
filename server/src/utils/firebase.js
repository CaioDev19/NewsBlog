const { bucket } = require('../config/firebase');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  uploadImageToStorage(file) {
    const tokenId = uuidv4();

    return new Promise((resolve, reject) => {
      if (!file) {
        reject('No image file');
      }

      let newFileName = `${file.originalname}_${Date.now()}`;
      let fileUpload = bucket.file(newFileName);

      const blobStream = fileUpload.createWriteStream({
        metadata: {
          contentType: file.mimetype,
          metadata: {
            firebaseStorageDownloadTokens: tokenId,
          },
        },
      });

      blobStream.on('error', (error) => {
        reject(error);
      });

      blobStream.on('finish', async () => {
        await fileUpload.makePublic();
        const url = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${newFileName}?alt=media&token=${tokenId}`;

        resolve(url);
      });

      blobStream.end(file.buffer);
    });
  },
};
