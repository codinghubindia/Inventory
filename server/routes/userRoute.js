const express = require('express');
const { protect } = require('../middleware/auth');
const { registerUser, authUser, getUser, updateUser } = require('../controllers/userController');
const router = express.Router();


router.route('/register').post(registerUser);
router.route('/auth').post(authUser);
router.route('/profile').get(protect, getUser).put(protect, updateUser);


module.exports = router;