const fs = require("fs/promises");
const path = require("path");
const Jimp = require("jimp");
const { User } = require("../../models");
const { sendSuccessResponse } = require("../../utils");

const uploadDir = path.join(__dirname, "../../", "public/avatars");

const avatars = async (req, res) => {
  const { originalname, path: tempName } = req.file;
  try {
    const [extention] = originalname.split(".").reverse();

    const originalAvatar = await Jimp.read(tempName);
    await originalAvatar.resize(250, 250).writeAsync(tempName);

    const newAvatarName = `user_${req.user._id}.${extention}`;
    const newAvatarPath = path.join(uploadDir, newAvatarName);
    await fs.rename(tempName, newAvatarPath);
    const avatar = path.join("/avatars", newAvatarName);
    const { avatarUrl } = await User.findByIdAndUpdate(
      req.user._id,
      { avatarUrl: avatar },
      { new: true }
    );

    sendSuccessResponse(res, { avatarUrl }, 201);
  } catch (error) {
    await fs.unlink(tempName);
  }
};

module.exports = avatars;
