const { NotFound } = require("http-errors");
const { Contact } = require("../../models");
const { sendSuccessResponse } = require("../../utils");

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const contact = await Contact.findById(
    contactId,
    "_id name email phone favorite"
  );
  if (!contact) {
    throw new NotFound(`Contact with id=${contactId} not found`);
  }
  sendSuccessResponse(res, { contact });
};

module.exports = getContactById;
