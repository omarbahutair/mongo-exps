import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import '../model/User.js';

before(async () => {
  const mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());
});
