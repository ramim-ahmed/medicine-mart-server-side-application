const jwt = require("jsonwebtoken");

const createToken = (payload, secret, expireTime) => {
  const token = jwt.sign(payload, secret, { expiresIn: expireTime });
  return token;
};

module.exports = createToken;
