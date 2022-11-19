import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  name: String,
  age: Number,
});

mongoose.model('user', UserSchema);
