const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

//登录
router.get('/login', userController.user_login_get)
router.post('/login', userController.user_login_post)

//注册
router.get('/register', userController.user_register_get)
router.post('/register', userController.user_register_post)


module.exports = router;

