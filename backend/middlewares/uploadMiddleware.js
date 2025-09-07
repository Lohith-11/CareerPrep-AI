const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");

// Configure Cloudinary storage for uploaded files
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "career-prep-ai/profile-images", // Folder in Cloudinary
    allowed_formats: ["jpg", "jpeg", "png"],
    transformation: [
      { width: 400, height: 400, crop: "limit" }, // Resize images
      { quality: "auto" }, // Optimize quality
    ],
  },
});

//File filter
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only .jpg, .jpeg and .png files are allowed"), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
});

module.exports = upload;
