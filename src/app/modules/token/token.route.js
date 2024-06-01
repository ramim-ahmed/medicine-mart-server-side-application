const express = require("express");
const { tokenController } = require("./token.controller");
const router = express.Router();

router.post("/create-access-token", tokenController.createNewToken);

module.exports.tokenRoutes = router;
