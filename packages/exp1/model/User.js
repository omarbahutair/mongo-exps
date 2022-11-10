import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  name: String,
  age: Number,
  hobbies: [String],
  gender: { type: String, enum: ['male', 'female'] },
});

mongoose.model('user', UserSchema);
