const getUserListContacts = require("./getUserListContacts");
const addUserContact = require("./addUserContact");
const getContactById = require("./getContactById");
const removeContactById = require("./removeContactById");
const updateContactById = require("./updateContactById");
const updateFavoriteStatus = require("./updateFavoriteStatus");

module.exports = {
  getUserListContacts,
  addUserContact,
  getContactById,
  removeContactById,
  updateContactById,
  updateFavoriteStatus,
};
