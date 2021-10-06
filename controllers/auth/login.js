const { User } = require("../../models");
const { Unauthorized } = require("http-errors");
const { sendSuccessResponse } = require("../../utils");

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || !user.comparePassword(password)) {
    throw new Unauthorized("Email or password is wrong");
  }

  const token = user.createToken();
  const { subscription } = await User.findByIdAndUpdate(user._id, { token });
  sendSuccessResponse(res, { token, user: { email, subscription } });
};

module.exports = login;
