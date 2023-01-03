import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import '../model/User.js';

before(async () => {
  const mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());
});

beforeEach(async () => {
  const currentDate = new Date();

  await mongoose.connection.dropDatabase();
  await mongoose.model('user').insertMany([
    {
      name: 'this year',
      age: 1,
      dateCreated: new Date(`1-2-${currentDate.getFullYear()}`),
    },
    {
      name: 'this month',
      age: 5,
      dateCreated: new Date(
        `${currentDate.getMonth() + 1}-2-${currentDate.getFullYear()}`
      ),
    },
    {
      name: 'today',
      age: 3,
      dateCreated: new Date(),
    },
  ]);
});
