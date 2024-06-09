const httpStatus = require("http-status");
const { userService } = require("./user.service");

const createNewUser = async (req, res) => {
  try {
    const data = req.body;
    const result = await userService.createNewUser(data);
    res.status(httpStatus.OK).json({
      success: true,
      message: "User Created Successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "User Created Failed!!",
      error,
    });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const result = await userService.getAllUsers();
    res.status(httpStatus.OK).json({
      success: true,
      message: "Users All Fetch Successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Users All Fetch Failed!!",
      error,
    });
  }
};

const changeRole = async (req, res) => {
  try {
    const { role } = req.body;
    const { email } = req.params;
    const result = await userService.changeRole(email, role);
    res.status(httpStatus.OK).json({
      success: true,
      message: "User Role Change Successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "User Role Change Failed!!",
      error,
    });
  }
};

const getUserRole = async (req, res) => {
  try {
    const { email } = req.params;
    if (email !== req.decoded.email) {
      return res.status(httpStatus.FORBIDDEN).json({
        message: "Forbidden Access!!",
      });
    }
    const result = await userService.getUserRole(email);
    res.status(httpStatus.OK).json({ role: result?.role });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Get User Role Is Failed!!",
      error,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const data = req.body;
    const result = await userService.updateUser(data);
    res.status(httpStatus.OK).json({
      success: true,
      message: "User Updated Successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "User Updated Failed!!",
      error,
    });
  }
};
module.exports.userController = {
  createNewUser,
  getAllUsers,
  changeRole,
  getUserRole,
  updateUser,
};
