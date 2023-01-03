import mongoose, { Schema } from 'mongoose';

const ProductScehma = new Schema({
  title: String,
  combinations: [
    {
      size: String,
      color: String,
      qty: Number,
    },
  ],
  brand: String,
});

mongoose.model('product', ProductScehma);
