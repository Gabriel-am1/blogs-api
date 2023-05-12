const express = require('express');

const validatedLogin = require('../middleware/loginValidated');
const { loginUser } = require('../controllers/loginController');

const router = express.Router();

router.post('/', validatedLogin, loginUser);

module.exports = router;