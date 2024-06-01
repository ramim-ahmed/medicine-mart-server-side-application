const User = require("../modules/user/user.model");

const verifySeller = async (req, res, next) => {
  const email = req.decoded.email;
  const user = await User.findOne({ email });
  const isAdmin = user?.role === "SELLER";
  if (!isAdmin) {
    return res.status(403).send({ message: "forbidden access" });
  }
  next();
};

module.exports = verifySeller;
