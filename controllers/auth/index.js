const signup = require("./signup");
const verify = require("./verify");
const repeatVerification = require("./repeatVerification");
const login = require("./login");
const logout = require("./logout");
const current = require("./current");
const avatars = require("./avatars");

module.exports = {
  signup,
  login,
  logout,
  current,
  avatars,
  verify,
  repeatVerification,
};
