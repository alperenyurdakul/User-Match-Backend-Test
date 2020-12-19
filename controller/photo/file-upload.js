const aws = require('aws-sdk');
const express = require('express');
const multer = require('multer');
const multerS3 = require('multer-s3');
require('dotenv').config();


aws.config.update({

    secretAccessKey:process.env.secretAccessKey,
    accessKeyId:process.env.accessKeyId,
    region:'us-east-2'
});
 

const s3 = new aws.S3();
 
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'astroapi',
    acl:'public-read',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata: function (req, file, cb) {
      cb(null, {fieldName: 'TESTING_METADATA'});
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
});

module.exports = upload;
 