const User = require("./user.model");

const createNewUser = async (data) => {
  const { email } = data;
  const isExits = await User.findOne({ email });
  if (isExits) return isExits;
  const result = await User.create(data);
  return result;
};

const getAllUsers = async () => {
  const result = await User.find({}).sort({ createdAt: "desc" });
  return result;
};

const changeRole = async (email, role) => {
  const result = await User.updateOne({ email }, { role });
  return result;
};

const getUserRole = async (email) => {
  const result = await User.findOne({ email });
  return result;
};

const updateUser = async (data) => {
  const { email, userName, photo } = data;
  const result = await User.updateOne({ email }, { name: userName, photo });
  return result;
};

module.exports.userService = {
  createNewUser,
  getAllUsers,
  changeRole,
  getUserRole,
  updateUser,
};
