// import express from "express";
// import { searchProducts } from "../controllers/productController.js";

// const router = express.Router();

// router.get("/search", searchProducts);

// export default router;

import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// GET /api/products?limit=20
router.get("/", async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 20;
    const products = await Product.find().limit(limit);
    res.json(products);
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

export default router;
