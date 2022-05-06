const multer = require("multer");

const MIME_TYPES = {
'image/jpeg': '.jpeg',
'image/png': '.png',
'image/jpg': '.jpg'
}
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "images");
  },
  filename: function (req, file, callback) {
    // Suffix unique depuis doc multer
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    // nom d'origine en remplaçant espaces par _
    const Name = file.originalname.split(" ").join("_");
    // Extension du fichier par table de conversion
    const extension = MIME_TYPES[file.mimetype]

   
    callback(null, Name + "-" + uniqueSuffix + extension);
  },
});

module.exports = multer({ storage: storage }).single('image');