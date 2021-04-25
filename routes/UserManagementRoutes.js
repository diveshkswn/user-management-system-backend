const express = require('express');

const userController = require('../controllers/UserController');

const router = express.Router();

// /api/v1/users
router.route('/').get(userController.getAllUsers).post(userController.addUser);

// /api/vi/users/:id
router.route('/:id').delete(userController.deleteUser).put();

module.exports = router;
