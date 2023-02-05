import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  email: String,
  cart: [
    {
      product: { type: Schema.Types.ObjectId, ref: 'product' },
      color: String,
      size: String,
      qty: Number,
    },
  ],
});

model('user', UserSchema);
