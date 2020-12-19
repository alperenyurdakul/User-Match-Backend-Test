const express = require('express');
const User = require('../model/userModels');
const router = express.Router();
const phoneService = require('../controller/phone/phoneService')

router.get('/', async (req, res) => {
    const tumkullanicilar = await User.find();
    res.send(tumkullanicilar);
});

router.post('/giris',phoneService

);



module.exports = router;
