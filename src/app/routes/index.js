const express = require("express");
const { userRoutes } = require("../modules/user/user.route");
const { categoryRoutes } = require("../modules/category/category.route");
const router = express.Router();

const moduleRoutes = [
  {
    path: "/users",
    route: userRoutes,
  },
  {
    path: "/categories",
    route: categoryRoutes,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route?.route);
});

module.exports.applicationRoutes = router;
