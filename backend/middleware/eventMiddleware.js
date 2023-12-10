//Import Module:
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

//Set up storage for Images:
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads/images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const fileFilter = (req, file, cb) => {
  const allowedFiletypes = ["image/jpeg, image/jpg, image/png"];
  if (allowedFiletypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({ storage, fileFilter });

module.exports = upload;
