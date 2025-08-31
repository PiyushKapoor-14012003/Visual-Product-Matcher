import { uploadToCloudinary } from "../utils/cloudinary.js";
import Product from "../models/Product.js";

export const handleUpload = async (req, res) => {
  try {
    let imageData;
    if (req.file) {
      imageData = await uploadToCloudinary(req.file.path);
    }
    else if (req.body.image) {
      imageData = await uploadToCloudinary(req.body.image);
    } else {
      return res.status(400).json({ error: "No image provided" });
    }
    const mockEmbedding = Array.from({ length: 512 }, () => Math.random());
    const embeddingDimension = mockEmbedding.length;
    const newProduct = await Product.create({
      name: req.body.name || "Unnamed Product",
      category: req.body.category || "Uncategorized",
      description: req.body.description || "",
      tags: req.body.tags || [],
      image: {
        url: imageData.secure_url,
        publicId: imageData.public_id,
        width: imageData.width,
        height: imageData.height,
        format: imageData.format,
        bytes: imageData.bytes,
        alt: req.body.alt || req.body.name || "Uploaded image",
      },
      embedding: {
        vector: mockEmbedding,
        model: "",
        dimension: embeddingDimension,
      },
    });

    return res.status(201).json(newProduct);
  } catch (err) {
    console.error("Upload failed:", err);
    res.status(500).json({ error: "Upload failed" });
  }
};