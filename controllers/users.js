const User = require("../models/User");

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find(req.query).populate("tags dog");
    res.json({
      data: users,
      msg: "show all users",
    });
  } catch (err) {
    console.log(err);
  }
};

const getUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).populate("tags dog");
    res.json({
      data: user,
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getUsers,
  getUser,
};
