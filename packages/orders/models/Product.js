import { Schema, model } from 'mongoose';

const ProductSchema = new Schema({
  title: String,
  combinations: [
    { size: String, color: { value: String, name: String }, qty: Number },
  ],
  price: Number,
});

model('product', ProductSchema);
