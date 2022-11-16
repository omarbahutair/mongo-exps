import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import '../model/User.js';

before(async () => {
  const mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());

  const User = mongoose.model('user');

  await User.collection.drop();

  await User.insertMany([
    {
      name: 'Sam',
      age: 24,
      hobbies: ['drawing'],
      gender: 'male',
    },
    {
      name: 'John',
      age: 15,
      hobbies: ['basketball'],
      gender: 'male',
    },
    {
      name: 'David',
      age: 9,
      hobbies: ['football'],
      gender: 'male',
    },
    {
      name: 'John',
      age: 36,
      hobbies: ['hiking', 'camping'],
      gender: 'male',
    },
    {
      name: 'John',
      age: 10,
      gender: 'male',
    },
  ]);
});
