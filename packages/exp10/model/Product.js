import { Schema, model } from 'mongoose';

const ProductSchema = new Schema({
  title: String,
  colors: [String],
});

model('product', ProductSchema);
