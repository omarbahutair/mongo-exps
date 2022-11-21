import mongoose, { Schema } from 'mongoose';

const ProductSchema = new Schema({
  title: String,
  price: Number,
  sizes: [
    {
      value: String,
      colors: [
        {
          value: String,
          qty: Number,
        },
      ],
    },
  ],
});

mongoose.model('product', ProductSchema);
