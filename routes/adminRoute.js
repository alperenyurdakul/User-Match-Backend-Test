const express = require('express');

const router = express.Router();

const isAdmin = require('../middleware/isAdmin');

const indexGetController = require('../controller/admin/index/get');
const authGetController = require('../controller/admin/auth/get');

const authPostConroller = require('../controller/admin/auth/post');

router.get(
  '/',
  isAdmin,
  indexGetController
);
router.get(
  '/auth',
  authGetController
);

router.post(
  '/auth',
  authPostConroller
);

module.exports = router;