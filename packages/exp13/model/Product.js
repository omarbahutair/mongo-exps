import { Schema, model } from 'mongoose';

const ProductSchema = new Schema({
  images: [
    {
      color: String,
      mimeType: String,
      name: String,
    },
  ],
});

model('product', ProductSchema);
