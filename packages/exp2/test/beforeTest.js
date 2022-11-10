import mongoose from 'mongoose';
import { keys } from '@mongodb-exps/config';
import '../model/Product.js';

before(async () => {
  await mongoose.connect(keys.mongoURI);

  const Product = mongoose.model('product');

  await Product.collection.drop();

  await Product.insertMany([
    {
      title: 'Jeans',
      description: 'They are blue',
      sizes: [
        {
          size: 'lg',
          qty: 5,
        },
        {
          size: 'md',
          qty: 2,
        },
        {
          size: 's',
          qty: '10',
        },
      ],
    },
    {
      title: 'Jacket',
      sizes: [
        {
          size: 'lg',
          qty: 1,
        },
      ],
    },
  ]);
});
