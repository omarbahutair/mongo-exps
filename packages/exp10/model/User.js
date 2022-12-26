import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  name: String,
  age: Number,
  dateCreated: Date,
});

mongoose.model('user', UserSchema);
