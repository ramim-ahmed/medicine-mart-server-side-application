const express = require("express");
const router = express.Router();

const moduleRoutes = [];

moduleRoutes.forEach((route) => {
  router.use(route.path, route?.route);
});

module.exports.applicationRoutes = router;
