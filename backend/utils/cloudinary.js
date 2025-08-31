import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Accepts file path OR base64 string
export const uploadToCloudinary = async (fileOrBase64) => {
  return await cloudinary.uploader.upload(fileOrBase64, {
    folder: "product-matcher",
  });
};
