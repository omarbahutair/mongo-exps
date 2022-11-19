import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import '../model/User.js';

before(async () => {
  const monogoServer = await MongoMemoryServer.create();
  await mongoose.connect(monogoServer.getUri());
});
