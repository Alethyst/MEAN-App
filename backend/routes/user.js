const express = require('express');

const UserController = require('../controllers/user');

const router = express();

router.post('/signup', UserController.createUser);

router.post("/login", UserController.userLogin);

module.exports = router;