const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,
  embedding: [Number],
  tags: [String],
});

module.exports = mongoose.model('Product', productSchema);