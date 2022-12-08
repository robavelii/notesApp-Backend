const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/usersController');
const verifyJWT = require('../middleware/verifyJWT');

router.use(verifyJWT);
router
  .route('/')
  .get(usersControllers.getAllUsers)
  .post(usersControllers.createUser)
  .patch(usersControllers.updateUser)
  .delete(usersControllers.deleteUser);

module.exports = router;
