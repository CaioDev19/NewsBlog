const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, path.resolve('./src/uploads'));
  },
  filename: (_req, file, cb) => {
    const time = new Date().getTime();

    cb(null, `${time}_${file.originalname}`);
  },
});
const upload = multer({ storage });

module.exports = { upload };
