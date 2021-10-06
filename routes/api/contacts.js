const express = require("express");
const router = express.Router();
const {
  contactsSchemaJoi,
  updateFavoriteStatusSchemaJoi,
} = require("../../models/contacts");
const { contacts: ctrl } = require("../../controllers");
const {
  controllerWrapper,
  validation,
  authenticate,
} = require("../../middlewares");

router.get("/", authenticate, controllerWrapper(ctrl.getUserListContacts));

router.get("/:contactId", authenticate, controllerWrapper(ctrl.getContactById));

router.post(
  "/",
  authenticate,
  validation(contactsSchemaJoi),
  controllerWrapper(ctrl.addUserContact)
);

router.delete(
  "/:contactId",
  authenticate,
  controllerWrapper(ctrl.removeContactById)
);

router.put(
  "/:contactId",
  authenticate,
  validation(contactsSchemaJoi),
  controllerWrapper(ctrl.updateContactById)
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  validation(updateFavoriteStatusSchemaJoi),
  controllerWrapper(ctrl.updateFavoriteStatus)
);

module.exports = router;
