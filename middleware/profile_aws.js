const aws = require('aws-sdk');
const multerS3 = require("multer-s3");
const multer = require("multer");

const s3 = new aws.S3();
require('dotenv').config();

aws.config.update({
  secretAccessKey: process.env.SECRETACCESSKEY,
  accessKeyId: process.env.ACCESSKEYID,
  region: 'ap-southeast-2',
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(new MulterError("Invalid file type, only JPEG and PNG is allowed!"), false);
  }
};

const upload = multer({fileFilter,
      storage: multerS3({
          acl: 'public-read',
          s3: s3,
          bucket: 'fridgemate',
          metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
          },
          key: function (req, file, cb) {
            cb(null, Date.now().toString());
          },
    }),
});


module.exports = upload