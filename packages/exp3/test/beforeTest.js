import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import '../model/Product.js';

before(async () => {
  const mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());

  await mongoose.model('product').collection.drop();
});
