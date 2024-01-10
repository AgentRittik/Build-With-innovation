import dotenv from 'dotenv';

dotenv.config();

module.exports = {
    AWS_REGION: process.env.AWS_REGION,
    SECRET_ACCESS_KEY : process.env.SECRET_ACCESS_KEY,
    ACCESS_KEY_ID : process.env.ACCESS_KEY_ID,
    BUCKET_NAME : process.env.BUCKET_NAME
}