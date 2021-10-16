const express = require("express");
const router = express.Router();
const { auth: ctrl } = require("../../controllers");
const {
  controllerWrapper,
  validation,
  authenticate,
  upload,
} = require("../../middlewares");
const { userSchemaJoi } = require("../../models/user");

router.post(
  "/signup",
  validation(userSchemaJoi),
  controllerWrapper(ctrl.signup)
);

router.get("/verify/:verifyToken", controllerWrapper(ctrl.verify));
router.post("/verify", controllerWrapper(ctrl.repeatVerification));
router.post("/login", validation(userSchemaJoi), controllerWrapper(ctrl.login));
router.get("/logout", authenticate, controllerWrapper(ctrl.logout));
router.get("/current", authenticate, controllerWrapper(ctrl.current));
router.patch(
  "/avatar",
  authenticate,
  upload.single("avatar"),
  controllerWrapper(ctrl.avatars)
);

module.exports = router;
