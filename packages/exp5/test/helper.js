import mongoose from 'mongoose';

export const createUser = async () => {
  const newUser = { name: 'john', age: 20 };

  return await mongoose.model('user').create(newUser);
};
