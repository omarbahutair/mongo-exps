import { model, Schema } from 'mongoose';

const ProductSchema = new Schema({
  title: String,
  price: Number,
  quantity: Number,
});

model('product', ProductSchema);
