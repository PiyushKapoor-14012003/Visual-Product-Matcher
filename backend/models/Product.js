// const mongoose = require("mongoose");

// const productSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     category: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     imageUrl: {
//       type: String,
//       required: true,
//     },
//     embedding: {
//       type: [Number],
//       required: true,
//     },
//     tags: {
//       type: [String],
//       default: [],
//     },
//     metadata: {
//       width: Number,
//       height: Number,
//       format: String,
//       size: Number,
//       dominantColor: String,
//     },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Product", productSchema);

import mongoose from "mongoose";

const { Schema } = mongoose;
const ImageSchema = new Schema(
  {
    url: {
      type: String,
      required: true,
      trim: true,
    },
    publicId: {
      type: String,
      trim: true,
      index: true,
    },
    width: { type: Number, min: 1 },
    height: { type: Number, min: 1 },
    format: { type: String, trim: true },
    bytes: { type: Number, min: 0 },
    alt: { type: String, trim: true },
  },
  { _id: false }
);

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 200,
    },
    category: {
      type: String,
      required: true,
      trim: true,
      index: true,
      maxlength: 120,
    },
    description: {
      type: String,
      trim: true,
      maxlength: 2000,
    },
    tags: {
      type: [String],
      default: [],
      index: true,
    },

    image: {
      type: ImageSchema,
      required: true,
    },

    // embedding: {
    //   vector: {
    //     type: [Number],
    //     select: false, 
    //   },
    //   model: {
    //     type: String,
    //     trim: true,
    //     default: "",
    //   },
    //   dimension: { type: Number, min: 0 },
    // },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

ProductSchema.index({
  name: "text",
  category: "text",
  tags: "text",
});

// ProductSchema.pre("validate", function (next) {
//   if (
//     this.embedding &&
//     Array.isArray(this.embedding.vector) &&
//     this.embedding.dimension &&
//     this.embedding.vector.length !== this.embedding.dimension
//   ) {
//     return next(
//       new Error(
//         `Embedding dimension (${this.embedding.dimension}) does not match vector length (${this.embedding.vector.length}).`
//       )
//     );
//   }
//   next();
// });

const Product =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default Product;
