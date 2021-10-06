const { User } = require("../../models");
const { Unauthorized } = require("http-errors");
const { sendSuccessResponse } = require("../../utils");

const current = async (req, res) => {
  const { _id } = req.user;
  const user = await User.findById(_id);
  if (!user) {
    throw new Unauthorized("Not authorized");
  }

  const { email, subscription } = user;
  sendSuccessResponse(res, { email, subscription }, 201);
};

module.exports = current;
