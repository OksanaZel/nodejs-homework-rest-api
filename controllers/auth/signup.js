const { User } = require("../../models");
const { Conflict } = require("http-errors");
const gravatar = require("gravatar");
const { sendSuccessResponse } = require("../../utils");

const signup = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict("Email in use");
  }

  const newUser = new User({ email });
  newUser.setPassword(password);
  newUser.setAvatar(gravatar.url(email));
  const { subscription } = await newUser.save();
  sendSuccessResponse(res, { email, subscription }, 201);
};

module.exports = signup;
