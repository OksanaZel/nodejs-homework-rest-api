const { Contact } = require("../../models");
const { sendSuccessResponse } = require("../../utils");

const addUserContact = async (req, res) => {
  const newContact = { ...req.body, owner: req.user._id };
  const contact = await Contact.create(newContact);
  sendSuccessResponse(res, { contact }, 201);
};

module.exports = addUserContact;
