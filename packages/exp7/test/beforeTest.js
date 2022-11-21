import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import '../models/Product.js';

before(async () => {
  const mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());

  await mongoose.model('product').create({
    title: 'new product',
    price: 12,
    sizes: [
      {
        value: 'l',
        colors: [
          {
            value: 'black',
            qty: 6,
          },
        ],
      },
    ],
  });
});
