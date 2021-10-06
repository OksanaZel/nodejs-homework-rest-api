const { Contact } = require("../../models");
const { sendSuccessResponse } = require("../../utils");

const getUserListContacts = async (req, res) => {
  const { _id } = req.user;
  const contacts = await Contact.find({ owner: _id });
  sendSuccessResponse(res, { contacts });
};

module.exports = getUserListContacts;
