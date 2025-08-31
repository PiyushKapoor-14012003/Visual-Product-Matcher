import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "../models/Product.js";
import { getImageEmbedding } from "../utils/embedding.js";

dotenv.config();

const Products = [
  {
    name: "Classic White Sneakers",
    category: "Shoes",
    description: "High quality shoes - Classic White Sneakers.",
    tags: ["shoes", "classic","sneakers "],
    image: {
      url: "https://res.cloudinary.com/del5fdhea/image/upload/v1756625453/products_shoes1_gzu36j.jpg",
      publicId: "shoes1",
      width: 500,
      height: 500,
      format: "jpg",
      bytes: 140500,
      alt: "Classic White Sneakers"
    }
},
  {
    name: "Red Running Shoes",
    category: "Shoes",
    description: "High quality shoes - Red Running Shoes.",
    tags: ["shoes", "red"],
    image: {
      url: "https://res.cloudinary.com/del5fdhea/image/upload/v1756626253/shoes2.jpg",
      publicId: "shoes2",
      width: 500,
      height: 500,
      format: "jpg",
      bytes: 141000,
      alt: "Red Running Shoes"
    }
},
  {
    name: "Black Leather Boots",
    category: "Shoes",
    description: "High quality shoes - Black Leather Boots.",
    tags: ["black", "leather", "shoes"],
    image: {
      url: "https://res.cloudinary.com/del5fdhea/image/upload/v1756626501/shoes3.jpg",
      publicId: "shoes3",
      width: 500,
      height: 500,
      format: "jpg",
      bytes: 141500,
      alt: "Black Leather Boots"
    }
},
  {
    name: "Blue Canvas Sneakers",
    category: "Shoes",
    description: "High quality shoes - Blue Canvas Sneakers.",
    tags: ["blue", "canvas", "shoes"],
    image: {
      url: "https://res.cloudinary.com/del5fdhea/image/upload/v1756626628/shoes4.jpg",
      publicId: "shoes4",
      width: 500,
      height: 500,
      format: "jpg",
      bytes: 142000,
      alt: "Blue Canvas Sneakers"
    }
},
  {
    name: "Brown Formal Loafers",
    category: "Shoes",
    description: "High quality shoes - Brown Formal Loafers.",
    tags: ["brown", "formal", "loafers", "shoes"],
    image: {
      url: "https://res.cloudinary.com/del5fdhea/image/upload/v1756626744/shoes5.jpg",
      publicId: "shoes5",
      width: 500,
      height: 500,
      format: "jpg",
      bytes: 142500,
      alt: "Brown Formal Loafers"
    }
},
  {
    name: "White Sports Trainers",
    category: "Shoes",
    description: "High quality shoes - White Sports Trainers.",
    tags: ["shoes", "sports trainer", "white"],
    image: {
      url: "https://res.cloudinary.com/del5fdhea/image/upload/v1756626961/shoes6.jpg",
      publicId: "shoes6",
      width: 500,
      height: 500,
      format: "jpg",
      bytes: 143000,
      alt: "White Sports Trainers"
    }
},
  {
    name: "Green Hiking Boots",
    category: "Shoes",
    description: "High quality shoes - Green Hiking Boots.",
    tags: ["boots", "green", "hiking", "shoes"],
    image: {
      url: "https://res.cloudinary.com/del5fdhea/image/upload/v1756627064/shoes7.jpg",
      publicId: "shoes7",
      width: 500,
      height: 500,
      format: "jpg",
      bytes: 143500,
      alt: "Green Hiking Boots"
    }
},
  {
    name: "Black Running Trainers",
    category: "Shoes",
    description: "High quality shoes - Black Running Trainers.",
    tags: ["shoes", "black", "running trainers"],
    image: {
      url: "https://res.cloudinary.com/del5fdhea/image/upload/v1756627561/shoes8.jpg",
      publicId: "shoes8",
      width: 500,
      height: 500,
      format: "jpg",
      bytes: 144000,
      alt: "Black Running Trainers"
    }
},
  {
    name: "Yellow Slip-On Sneakers",
    category: "Shoes",
    description: "High quality shoes - Yellow Slip-On Sneakers.",
    tags: ["shoes", "slip-on", "sneakers", "yellow"],
    image: {
      url: "https://res.cloudinary.com/del5fdhea/image/upload/v1756627702/shoes9.jpg",
      publicId: "shoes9",
      width: 500,
      height: 500,
      format: "jpg",
      bytes: 144500,
      alt: "Yellow Slip-On Sneakers"
    }
},
  {
    name: "White Tennis Shoes",
    category: "Shoes",
    description: "High quality shoes - White Tennis Shoes.",
    tags: ["shoes", "white", "tennis"],
    image: {
      url: "https://res.cloudinary.com/del5fdhea/image/upload/v1756627853/shoes10.jpg",
      publicId: "shoes10",
      width: 500,
      height: 500,
      format: "jpg",
      bytes: 145000,
      alt: "White Tennis Shoes"
    }
},
  {
    name: "Slim Fit Blue Jeans",
    category: "Clothing",
    description: "High quality clothing - Slim Fit Blue Jeans.",
    tags: ["clothing", "slim fit", "jeans", "blue"],
    image: {
      url: "https://res.cloudinary.com/del5fdhea/image/upload/v1756627981/clothing1.jpg",
      publicId: "clothing1",
      width: 500,
      height: 500,
      format: "jpg",
      bytes: 145500,
      alt: "Slim Fit Blue Jeans"
    }
},
  {
    name: "Black Leather Jacket",
    category: "Clothing",
    description: "High quality clothing - Black Leather Jacket.",
    tags: ["clothing", "black", "leather", "jacket"],
    image: {
      url: "https://res.cloudinary.com/del5fdhea/image/upload/v1756628126/cloth2.jpg",
      publicId: "cloth2",
      width: 500,
      height: 500,
      format: "jpg",
      bytes: 146000,
      alt: "Black Leather Jacket"
    }
},
  {
    name: "White Cotton T-Shirt",
    category: "Clothing",
    description: "High quality clothing - White Cotton T-Shirt.",
    tags: ["clothing", "white", "cotton", "t-shirt"],
    image: {
      url: "https://res.cloudinary.com/del5fdhea/image/upload/v1756628247/cloth3.jpg",
      publicId: "cloth3",
      width: 500,
      height: 500,
      format: "jpg",
      bytes: 146500,
      alt: "White Cotton T-Shirt"
    }
},
  {
    name: "Formal Grey Suit",
    category: "Clothing",
    description: "High quality clothing - Formal Grey Suit.",
    tags: ["clothing", "formal", "grey","suit"],
    image: {
      url: "https://res.cloudinary.com/del5fdhea/image/upload/v1756630132/cloth4.jpg",
      publicId: "cloth4",
      width: 500,
      height: 500,
      format: "jpg",
      bytes: 147000,
      alt: "Formal Grey Suit"
    }
},
  {
    name: "Red Hoodie",
    category: "Clothing",
    description: "High quality clothing - Red Hoodie.",
    tags: ["clothing", "red", "hoodie"],
    image: {
      url: "https://res.cloudinary.com/del5fdhea/image/upload/v1756630296/cloth5.jpg",
      publicId: "cloth5",
      width: 500,
      height: 500,
      format: "jpg",
      bytes: 147500,
      alt: "Red Hoodie"
    }
},
  {
    name: "Blue Polo Shirt",
    category: "Clothing",
    description: "High quality clothing - Blue Polo Shirt.",
    tags: ["clothing", "blue"],
    image: {
      url: "https://res.cloudinary.com/del5fdhea/image/upload/v1756630132/cloth6.jpg",
      publicId: "cloth6",
      width: 500,
      height: 500,
      format: "jpg",
      bytes: 148000,
      alt: "Blue Polo Shirt"
    }
},
  {
    name: "Summer Floral Dress",
    category: "Clothing",
    description: "High quality clothing - Summer Floral Dress.",
    tags: ["clothing", "summer", "dress","floral"],
    image: {
      url: "https://res.cloudinary.com/del5fdhea/image/upload/v1756630132/cloth7.jpg",
      publicId: "cloth7",
      width: 500,
      height: 500,
      format: "jpg",
      bytes: 148500,
      alt: "Summer Floral Dress"
    }
},
  {
    name: "Winter Wool Sweater",
    category: "Clothing",
    description: "High quality clothing - Winter Wool Sweater.",
    tags: ["clothing", "winter", "wool","sweater"],
    image: {
      url: "https://res.cloudinary.com/del5fdhea/image/upload/v1756630132/cloth8.jpg",
      publicId: "cloth8",
      width: 500,
      height: 500,
      format: "jpg",
      bytes: 149000,
      alt: "Winter Wool Sweater"
    }
},
  {
    name: "Checked Casual Shirt",
    category: "Clothing",
    description: "High quality clothing - Checked Casual Shirt.",
    tags: ["clothing", "checked", "casual", "shirt"],
    image: {
      url: "https://res.cloudinary.com/del5fdhea/image/upload/v1756630132/cloth9.jpg",
      publicId: "cloth9",
      width: 500,
      height: 500,
      format: "jpg",
      bytes: 149500,
      alt: "Checked Casual Shirt"
    }
},
  {
    name: "Denim Jacket",
    category: "Clothing",
    description: "High quality clothing - Denim Jacket.",
    tags: ["clothing", "denim", "jacket"],
    image: {
      url: "https://res.cloudinary.com/del5fdhea/image/upload/v1756630132/cloth10.jpg",
      publicId: "cloth10",
      width: 500,
      height: 500,
      format: "jpg",
      bytes: 150000,
      alt: "Denim Jacket"
    }
},
  {
    name: "Leather Belt",
    category: "Accessories",
    description: "High quality accessories - Leather Belt.",
    tags: ["accessories", "leather", "belt"],
    image: {
      url: "https://res.cloudinary.com/del5fdhea/image/upload/v1756630132/accessories1.jpg",
      publicId: "accessories1",
      width: 500,
      height: 500,
      format: "jpg",
      bytes: 150500,
      alt: "Leather Belt"
    }
},
  {
    name: "Black Sunglasses",
    category: "Accessories",
    description: "High quality accessories - Black Sunglasses.",
    tags: ["accessories", "black", "sunglasses"],
    image: {
      url: "https://res.cloudinary.com/del5fdhea/image/upload/v1756630132/accessories2.jpg",
      publicId: "accessories2",
      width: 500,
      height: 500,
      format: "jpg",
      bytes: 151000,
      alt: "Black Sunglasses"
    }
},
  {
    name: "Woolen Scarf",
    category: "Accessories",
    description: "High quality accessories - Woolen Scarf.",
    tags: ["accessories", "woolen", "scarf"],
    image: {
      url: "https://res.cloudinary.com/del5fdhea/image/upload/v1756630132/accessories3.jpg",
      publicId: "accessories3",
      width: 500,
      height: 500,
      format: "jpg",
      bytes: 151500,
      alt: "Woolen Scarf"
    }
},
  {
    name: "Silver Cufflinks",
    category: "Accessories",
    description: "High quality accessories - Silver Cufflinks.",
    tags: ["accessories", "silver", "cufflinks"],
    image: {
      url: "https://res.cloudinary.com/del5fdhea/image/upload/v1756630132/accessories4.jpg",
      publicId: "accessories4",
      width: 500,
      height: 500,
      format: "jpg",
      bytes: 152000,
      alt: "Silver Cufflinks"
    }
},
  {
    name: "Baseball Cap",
    category: "Accessories",
    description: "High quality accessories - Baseball Cap.",
    tags: ["accessories", "baseball", "cap"],
    image: {
      url: "https://res.cloudinary.com/del5fdhea/image/upload/v1756630132/accessories5.jpg",
      publicId: "accessories5",
      width: 500,
      height: 500,
      format: "jpg",
      bytes: 152500,
      alt: "Baseball Cap"
    }
},
  {
    name: "Leather Wallet",
    category: "Accessories",
    description: "High quality accessories - Leather Wallet.",
    tags: ["accessories", "leather", "wallet"],
    image: {
      url: "https://res.cloudinary.com/del5fdhea/image/upload/v1756630132/accessories6.jpg",
      publicId: "accessories6",
      width: 500,
      height: 500,
      format: "jpg",
      bytes: 153000,
      alt: "Leather Wallet"
    }
},
  {
    name: "Beanie Hat",
    category: "Accessories",
    description: "High quality accessories - Beanie Hat.",
    tags: ["accessories", "beanie", "hat"],
    image: {
      url: "https://res.cloudinary.com/del5fdhea/image/upload/v1756630132/accessories7.jpg",
      publicId: "accessories7",
      width: 500,
      height: 500,
      format: "jpg",
      bytes: 153500,
      alt: "Beanie Hat"
    }
},
  {
    name: "Silk Tie",
    category: "Accessories",
    description: "High quality accessories - Silk Tie.",
    tags: ["accessories", "silk", "tie"],
    image: {
      url: "https://res.cloudinary.com/del5fdhea/image/upload/v1756630132/accessories8.jpg",
      publicId: "accessories8",
      width: 500,
      height: 500,
      format: "jpg",
      bytes: 154000,
      alt: "Silk Tie"
    }
},
  {
    name: "Gold Bracelet",
    category: "Accessories",
    description: "High quality accessories - Gold Bracelet.",
    tags: ["accessories", "gold", "bracelet"],
    image: {
      url: "https://res.cloudinary.com/del5fdhea/image/upload/v1756630132/accessories9.jpg",
      publicId: "accessories9",
      width: 500,
      height: 500,
      format: "jpg",
      bytes: 154500,
      alt: "Gold Bracelet"
    }
},
  {
    name: "Pearl Earrings",
    category: "Accessories",
    description: "High quality accessories - Pearl Earrings.",
    tags: ["accessories", "pearl", "earrings"],
    image: {
      url: "https://res.cloudinary.com/del5fdhea/image/upload/v1756630132/accessories10.jpg",
      publicId: "accessories10",
      width: 500,
      height: 500,
      format: "jpg",
      bytes: 155000,
      alt: "Pearl Earrings"
    }
},
  {
    name: "Leather Laptop Bag",
    category: "Bags",
    description: "High quality bags - Leather Laptop Bag.",
    tags: ["bags", "leather", "laptop bag"],
    image: {
      url: "https://res.cloudinary.com/del5fdhea/image/upload/v1756630132/bags1.jpg",
      publicId: "bags1",
      width: 500,
      height: 500,
      format: "jpg",
      bytes: 155500,
      alt: "Leather Laptop Bag"
    }
},
  {
    name: "Canvas Tote Bag",
    category: "Bags",
    description: "High quality bags - Canvas Tote Bag.",
    tags: ["bags", "canvas", "tote bag"],
    image: {
      url: "https://res.cloudinary.com/del5fdhea/image/upload/v1756630132/bags2.jpg",
      publicId: "bags2",
      width: 500,
      height: 500,
      format: "jpg",
      bytes: 156000,
      alt: "Canvas Tote Bag"
    }
},
  {
    name: "Black Backpack",
    category: "Bags",
    description: "High quality bags - Black Backpack.",
    tags: ["bags", "black", "backpack"],
    image: {
      url: "https://res.cloudinary.com/del5fdhea/image/upload/v1756630132/bags3.jpg",
      publicId: "bags3",
      width: 500,
      height: 500,
      format: "jpg",
      bytes: 156500,
      alt: "Black Backpack"
    }
},
  {
    name: "Travel Duffel Bag",
    category: "Bags",
    description: "High quality bags - Travel Duffel Bag.",
    tags: ["bags", "travel", "duffel bag"],
    image: {
      url: "https://res.cloudinary.com/del5fdhea/image/upload/v1756630132/bags4.jpg",
      publicId: "bags4",
      width: 500,
      height: 500,
      format: "jpg",
      bytes: 157000,
      alt: "Travel Duffel Bag"
    }
},
  {
    name: "Brown Messenger Bag",
    category: "Bags",
    description: "High quality bags - Brown Messenger Bag.",
    tags: ["bags", "brown", "messenger bag"],
    image: {
      url: "https://res.cloudinary.com/del5fdhea/image/upload/v1756630132/bags5.jpg",
      publicId: "bags5",
      width: 500,
      height: 500,
      format: "jpg",
      bytes: 157500,
      alt: "Brown Messenger Bag"
    }
},
  {
    name: "Red Handbag",
    category: "Bags",
    description: "High quality bags - Red Handbag.",
    tags: ["bags", "red", "handbag"],
    image: {
      url: "https://res.cloudinary.com/del5fdhea/image/upload/v1756630132/bags6.jpg",
      publicId: "bags6",
      width: 500,
      height: 500,
      format: "jpg",
      bytes: 158000,
      alt: "Red Handbag"
    }
},
  {
    name: "Sports Gym Bag",
    category: "Bags",
    description: "High quality bags - Sports Gym Bag.",
    tags: ["bags", "sports", "gym bag"],
    image: {
      url: "https://res.cloudinary.com/del5fdhea/image/upload/v1756630132/bags7.jpg",
      publicId: "bags7",
      width: 500,
      height: 500,
      format: "jpg",
      bytes: 158500,
      alt: "Sports Gym Bag"
    }
},
  {
    name: "Rolling Suitcase",
    category: "Bags",
    description: "High quality bags - Rolling Suitcase.",
    tags: ["bags", "rolling", "suitcase"],
    image: {
      url: "https://res.cloudinary.com/del5fdhea/image/upload/v1756630132/bags8.jpg",
      publicId: "bags8",
      width: 500,
      height: 500,
      format: "jpg",
      bytes: 159000,
      alt: "Rolling Suitcase"
    }
},
  {
    name: "Mini Crossbody Bag",
    category: "Bags",
    description: "High quality bags - Mini Crossbody Bag.",
    tags: ["bags", "mini", "crossbody"],
    image: {
      url: "https://res.cloudinary.com/del5fdhea/image/upload/v1756630132/bags9.jpg",
      publicId: "bags9",
      width: 500,
      height: 500,
      format: "jpg",
      bytes: 159500,
      alt: "Mini Crossbody Bag"
    }
},
  {
    name: "Beach Straw Bag",
    category: "Bags",
    description: "High quality bags - Beach Straw Bag.",
    tags: ["bags", "beach", "straw bag"],
    image: {
      url: "https://res.cloudinary.com/del5fdhea/image/upload/v1756630132/bags10.jpg",
      publicId: "bags10",
      width: 500,
      height: 500,
      format: "jpg",
      bytes: 160000,
      alt: "Beach Straw Bag"
    }
},
  {
    name: "Classic Silver Watch",
    category: "Watches",
    description: "High quality watches - Classic Silver Watch.",
    tags: ["watches", "classic", "silver"],
    image: {
      url: "https://res.cloudinary.com/del5fdhea/image/upload/v1756630132/watches1.jpg",
      publicId: "watches1",
      width: 500,
      height: 500,
      format: "jpg",
      bytes: 160500,
      alt: "Classic Silver Watch"
    }
},
  {
    name: "Black Smartwatch",
    category: "Watches",
    description: "High quality watches - Black Smartwatch.",
    tags: ["watches", "black", "smartwatch"],
    image: {
      url: "https://res.cloudinary.com/del5fdhea/image/upload/v1756630132/watches2.jpg",
      publicId: "watches2",
      width: 500,
      height: 500,
      format: "jpg",
      bytes: 161000,
      alt: "Black Smartwatch"
    }
},
  {
    name: "Gold Analog Watch",
    category: "Watches",
    description: "High quality watches - Gold Analog Watch.",
    tags: ["watches", "gold", "analog"],
    image: {
      url: "https://res.cloudinary.com/del5fdhea/image/upload/v1756630132/watches3.jpg",
      publicId: "watches3",
      width: 500,
      height: 500,
      format: "jpg",
      bytes: 161500,
      alt: "Gold Analog Watch"
    }
},
  {
    name: "Leather Strap Watch",
    category: "Watches",
    description: "High quality watches - Leather Strap Watch.",
    tags: ["watches", "leather", "strap"],
    image: {
      url: "https://res.cloudinary.com/del5fdhea/image/upload/v1756630132/watches4.jpg",
      publicId: "watches4",
      width: 500,
      height: 500,
      format: "jpg",
      bytes: 162000,
      alt: "Leather Strap Watch"
    }
},
  {
    name: "Diver's Watch",
    category: "Watches",
    description: "High quality watches - Diver's Watch.",
    tags: ["watches", "diver's" ],
    image: {
      url: "https://res.cloudinary.com/del5fdhea/image/upload/v1756630132/watches5.jpg",
      publicId: "watches5",
      width: 500,
      height: 500,
      format: "jpg",
      bytes: 162500,
      alt: "Diver's Watch"
    }
},
  {
    name: "Chronograph Watch",
    category: "Watches",
    description: "High quality watches - Chronograph Watch.",
    tags: ["watches", "chronograph"],
    image: {
      url: "https://res.cloudinary.com/del5fdhea/image/upload/v1756630132/watches6.jpg",
      publicId: "watches6",
      width: 500,
      height: 500,
      format: "jpg",
      bytes: 163000,
      alt: "Chronograph Watch"
    }
},
  {
    name: "Minimalist White Dial Watch",
    category: "Watches",
    description: "High quality watches - Minimalist White Dial Watch.",
    tags: ["watches", "minimalist", "white dial"],
    image: {
      url: "https://res.cloudinary.com/del5fdhea/image/upload/v1756630132/watches7.jpg",
      publicId: "watches7",
      width: 500,
      height: 500,
      format: "jpg",
      bytes: 163500,
      alt: "Minimalist White Dial Watch"
    }
},
  {
    name: "Digital Sports Watch",
    category: "Watches",
    description: "High quality watches - Digital Sports Watch.",
    tags: ["watches", "digital", "sports"],
    image: {
      url: "https://res.cloudinary.com/del5fdhea/image/upload/v1756630132/watches8.jpg",
      publicId: "watches8",
      width: 500,
      height: 500,
      format: "jpg",
      bytes: 164000,
      alt: "Digital Sports Watch"
    }
},
  {
    name: "Luxury Diamond Watch",
    category: "Watches",
    description: "High quality watches - Luxury Diamond Watch.",
    tags: ["watches", "luxury", "diamond"],
    image: {
      url: "https://res.cloudinary.com/del5fdhea/image/upload/v1756630132/watches9.jpg",
      publicId: "watches9",
      width: 500,
      height: 500,
      format: "jpg",
      bytes: 164500,
      alt: "Luxury Diamond Watch"
    }
},
  {
    name: "Casual Blue Watch",
    category: "Watches",
    description: "High quality watches - Casual Blue Watch.",
    tags: ["watches", "casual", "blue"],
    image: {
      url: "https://res.cloudinary.com/del5fdhea/image/upload/v1756630132/watches10.jpg",
      publicId: "watches10",
      width: 500,
      height: 500,
      format: "jpg",
      bytes: 165000,
      alt: "Casual Blue Watch"
    }
}
];

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    await Product.deleteMany({});
    await Product.insertMany(Products);
    console.log("✅ Products seeded successfully!");
    process.exit();
  } catch (error) {
    console.error("❌ Error seeding products:", error);
    process.exit(1);
  }
};


seedProducts();
