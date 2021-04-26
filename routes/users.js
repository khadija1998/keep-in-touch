const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
// const {getUserInfo } = require('../controllers/userController')

router.post('/message', userController.message);
router.get('/info', userController.getUserInfo);
router.post('/reply/:id', userController.replyContact); 
router.post('/search', userController.findContact);
router.post('/singlecontact/:id', userController.singleContact);


module.exports = router;