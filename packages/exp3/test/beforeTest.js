import mongoose from 'mongoose';
import { keys } from '@mongodb-exps/config';
import '../model/Product.js';

before(async () => {
  await mongoose.connect(keys.mongoURI);

  const Product = mongoose.model('product');

  await Product.collection.drop();
});
