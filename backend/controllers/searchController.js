// import Product from "../models/Product.js";
// import { getImageEmbedding } from "../utils/embedding.js";

// function cosineSimilarity(vecA, vecB) {
//   const dot = vecA.reduce((acc, val, i) => acc + val * vecB[i], 0);
//   const magA = Math.sqrt(vecA.reduce((acc, val) => acc + val * val, 0));
//   const magB = Math.sqrt(vecB.reduce((acc, val) => acc + val * val, 0));
//   return magA && magB ? dot / (magA * magB) : 0; // safe-guard
// }

// export const searchProducts = async (req, res) => {
//   try {
//     let embedding = req.body.embedding;

//     if (!embedding && req.body.imageUrl) {
//       console.log("🔎 Generating embedding for query image:", req.body.imageUrl);
//       const embedResult = await getImageEmbedding(req.body.imageUrl);
//       embedding = embedResult.vector;
//     }

//     if (!embedding || !Array.isArray(embedding)) {
//       return res.status(400).json({ error: "Provide either embedding or imageUrl" });
//     }

//     const limit = parseInt(req.query.limit) || 10;

//     const products = await Product.find().select("+embedding.vector");

//     const results = products
//       .filter((p) => p.embedding?.vector && p.embedding.vector.length > 0)
//       .map((product) => {
//         const score = cosineSimilarity(embedding, product.embedding.vector);
//         return {
//           ...product.toObject(),
//           similarity: Math.round(score * 100), 
//         };
//       })
//       .sort((a, b) => b.similarity - a.similarity)
//       .slice(0, limit);

//     res.json(results);
//   } catch (err) {
//     console.error("❌ Search failed:", err);
//     res.status(500).json({ error: "Search failed" });
//   }
// };


import Product from "../models/Product.js";

export const searchProducts = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query) {
      return res.status(400).json({ error: "Query is required" });
    }

    // case-insensitive search across multiple fields
    const regex = new RegExp(query, "i");
    const results = await Product.find({
      $or: [
        { name: regex },
        { description: regex },
        { category: regex },
        { tags: regex },
      ],
    }).limit(20);

    res.json(results);
  } catch (err) {
    console.error("Search failed:", err);
    res.status(500).json({ error: "Search failed" });
  }
};
