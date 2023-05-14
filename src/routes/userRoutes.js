const express = require('express');
const userValidated = require('../middleware/userValidated');
const token = require('../middleware/tokenValidated');

const {
  getAllUser,
  getByIdUser,
  createUser,
  removeUser, 
} = require('../controllers/userController');

const router = express.Router();

router.post('/', userValidated, createUser);
router.get('/', token, getAllUser);
router.get('/:id', token, getByIdUser);
router.delete('/me', token, removeUser);

module.exports = router; 