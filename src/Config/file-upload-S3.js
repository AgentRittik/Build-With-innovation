const { config } = require('dotenv');
config();
const multer= require('multer');
const multerS3 = require('multer-s3');
const {S3Client} = require("@aws-sdk/client-s3");

// dotenv.config();
// console.log("hello", process.env.BUCKET_NAME);

const s3 = new S3Client({
    credentials: {
        accessKeyId: process.env.ACCESS_KEY_ID, 
        secretAccessKey: process.env.SECRET_ACCESS_KEY
    },
    region: process.env.AWS_REGION // this is the region that you select in AWS account
})


const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.BUCKET_NAME,
        // acl: 'public-read',
        metadata: function (req, file, cb) {
            cb(null, {fieldName: file.fieldname});
        },
        key: function (req, file, cb) {
            cb(null, Date.now().toString())
        }
    })
});

module.exports =  upload;