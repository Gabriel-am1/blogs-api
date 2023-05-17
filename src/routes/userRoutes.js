const express = require('express');
const userValidated = require('../middleware/userValidated');
const token = require('../middleware/tokenValidated');

const {
  getAllUser,
  createUser,
  getById,
  removeUser, 
} = require('../controllers/userController');

const router = express.Router();

router.post('/', userValidated, createUser);
router.get('/', token, getAllUser);
router.get('/:id', token, getById);
router.delete('/me', token, removeUser);

module.exports = router; 