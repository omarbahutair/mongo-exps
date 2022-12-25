import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import '../model/User.js';

before(async () => {
  const mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());
});

beforeEach(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.model('user').insertMany([
    {
      name: 'john',
      age: 34,
    },
    {
      name: 'clark',
      age: 21,
    },
    {
      name: 'hank',
      age: 56,
    },
    {
      name: 'emily',
      age: 26,
    },
    {
      name: 'paul',
      age: 66,
    },
    {
      name: 'kelly',
      age: 39,
    },
    {
      name: 'kevin',
      age: 44,
    },
    {
      name: 'samwell',
      age: 20,
    },
    {
      name: 'kimberly',
      age: 29,
    },
    {
      name: 'derik',
      age: 23,
    },
    {
      name: 'steven',
      age: 55,
    },
  ]);
});
