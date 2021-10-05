const express = require("express");
const router = express.Router();
const { auth: ctrl } = require("../../controllers");
const {
  controllerWrapper,
  validation,
  authenticate,
} = require("../../middlewares");
const { userSchemaJoi } = require("../../models/user");

router.post(
  "/signup",
  validation(userSchemaJoi),
  controllerWrapper(ctrl.signup)
);
router.post("/login", validation(userSchemaJoi), controllerWrapper(ctrl.login));
router.get("/logout", authenticate, controllerWrapper(ctrl.logout));
router.get("/current", authenticate, controllerWrapper(ctrl.current));

module.exports = router;
