const { NotFound } = require("http-errors");
const { Contact } = require("../../models");
const { sendSuccessResponse } = require("../../utils");

const updateFavoriteStatus = async (req, res) => {
  const { contactId } = req.params;
  const { favorite } = req.body;
  const contact = await Contact.findByIdAndUpdate(
    contactId,
    { favorite },
    { new: true }
  );
  if (!contact) {
    throw new NotFound(`Contact with id=${contactId} not found`);
  }
  sendSuccessResponse(res, { contact });
};

module.exports = updateFavoriteStatus;
