import mongoose, { Schema } from 'mongoose';

const ProductSchema = new Schema({
  title: String,
  price: {
    curr1: { type: Number },
    curr2: { type: Number },
  },
  colors: [
    {
      color: { type: String, required: true },
      qty: { type: String, required: true },
    },
  ],
});

mongoose.model('product', ProductSchema);
