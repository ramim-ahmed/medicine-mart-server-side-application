const httpStatus = require("http-status");
const { tokenService } = require("./token.service");

const createNewToken = async (req, res) => {
  try {
    const user = req.body;
    const token = await tokenService.createNewToken(user);
    res.status(httpStatus.OK).json({ token });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({ error });
  }
};

module.exports.tokenController = {
  createNewToken,
};
