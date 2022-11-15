import mongoose, { Schema } from 'mongoose';

const ProductSchema = new Schema({
  title: String,
  price: {
    curr1: { type: Number },
    curr2: { type: Number },
  },
});

mongoose.model('product', ProductSchema);
