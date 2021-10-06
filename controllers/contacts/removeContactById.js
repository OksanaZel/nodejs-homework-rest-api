const { NotFound } = require("http-errors");
const { Contact } = require("../../models");
const { sendSuccessResponse } = require("../../utils");

const removeContactById = async (req, res) => {
  const { _id } = req.user;
  const { contactId } = req.params;
  const contact = await Contact.findOneAndRemove({
    _id: contactId,
    owner: _id,
  });

  if (!contact) {
    throw new NotFound(`Contact with id=${contactId} not found`);
  }

  sendSuccessResponse(res, { message: "Success remove", contact });
};

module.exports = removeContactById;
