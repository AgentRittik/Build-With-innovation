const express = require('express');
const {CreateUser , login} = require('../../Controller/user-controler');
const router = express.Router();

router.post("/createUser", CreateUser);
router.get("/login" , login );
module.exports = router;