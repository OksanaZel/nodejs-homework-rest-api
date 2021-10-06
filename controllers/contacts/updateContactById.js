const { NotFound } = require("http-errors");
const { Contact } = require("../../models");
const { sendSuccessResponse } = require("../../utils");

const updateContactById = async (req, res) => {
  const { _id } = req.user;
  const { contactId } = req.params;
  const contact = await Contact.findOneAndUpdate(
    {
      _id: contactId,
      owner: _id,
    },
    req.body,
    {
      new: true,
    }
  );
  if (!contact) {
    throw new NotFound(`Contact with id=${contactId} not found`);
  }
  sendSuccessResponse(res, { contact });
};

module.exports = updateContactById;
