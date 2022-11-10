import mongoose, { Schema } from 'mongoose';

const ProductSchema = new Schema({
  title: String,
  description: String,
  sizes: [
    {
      size: { type: String, enum: ['lg', 'md', 's'] },
      qty: { type: Number, min: 0 },
    },
  ],
});

mongoose.model('product', ProductSchema);
