const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { handleGetAllUserRequest } = require("../controllers/user.controller");
const {secret} = require("../constants");

router.use(checkPermission);

router.get("/user/all", handleGetAllUserRequest);

function checkPermission(req, res, next) {
  const token = req.headers.authorization.split(" ")[1];

  jwt.verify(token, secret, function (err, decoded) {
    if (err) {
      console.error(err);
      throw err;
    }
    console.log("decoded", decoded);
    next();
  });

  
}

module.exports = router;
