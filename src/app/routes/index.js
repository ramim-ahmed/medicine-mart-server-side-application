const express = require("express");
const { userRoutes } = require("../modules/user/user.route");
const { categoryRoutes } = require("../modules/category/category.route");
const { companyRoutes } = require("../modules/company/company.route");
const { medicineRoutes } = require("../modules/medicine/medicine.route");
const { tokenRoutes } = require("../modules/token/token.route");
const {
  advertisementRoutes,
} = require("../modules/advertisement/advertisement.route");
const { cartRoutes } = require("../modules/cart/cart.route");
const router = express.Router();

const moduleRoutes = [
  {
    path: "/users",
    route: userRoutes,
  },
  {
    path: "/companies",
    route: companyRoutes,
  },
  {
    path: "/categories",
    route: categoryRoutes,
  },
  {
    path: "/medicines",
    route: medicineRoutes,
  },
  {
    path: "/advertisements",
    route: advertisementRoutes,
  },
  {
    path: "/carts",
    route: cartRoutes,
  },
  {
    path: "/token",
    route: tokenRoutes,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route?.route);
});

module.exports.applicationRoutes = router;
