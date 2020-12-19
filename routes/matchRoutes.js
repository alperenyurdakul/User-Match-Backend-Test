const express = require('express');
const router = express.Router();

const findUser = require('../controller/match/matchFind');
const newMatch = require('../controller/match/new_match');
const matchResult = require('../controller/match/match_result');

router.post('/find',findUser);

router.post('/new-match',newMatch );

router.post('/result',matchResult );


module.exports = router;

