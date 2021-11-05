const express = require('express');
const router = express.Router();
const {handleSignUpRequest, handleGetAllUserRequest, handleLoginRequest} = require("../controllers/user.controller");

router.post('/signup', handleSignUpRequest);
router.post("/login", handleLoginRequest);

module.exports = router;