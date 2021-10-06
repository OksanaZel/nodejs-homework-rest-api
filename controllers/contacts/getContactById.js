const { NotFound } = require("http-errors");
const { Contact } = require("../../models");
const { sendSuccessResponse } = require("../../utils");

const getContactById = async (req, res) => {
  const { _id } = req.user;
  const { contactId } = req.params;
  const contact = await Contact.findOne(
    { _id: contactId, owner: _id },
    "_id name email phone favorite owner"
  );
  console.log(contact);
  if (!contact) {
    throw new NotFound(`Contact with id=${contactId} not found`);
  }
  sendSuccessResponse(res, { contact });
};

module.exports = getContactById;
