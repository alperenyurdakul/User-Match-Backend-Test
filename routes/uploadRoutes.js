const express = require('express');
const router = express.Router();

const upload = require('../controller/photo/file-upload');
const photoUpload = require('../controller/photo/photoUpload');

const singleUpload = upload.single('image');

router.post('/upload',
    singleUpload,
    photoUpload

);



module.exports = router;

