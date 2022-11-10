import mongoose from 'mongoose';
import { keys } from '@mongodb-exps/config';
import './model/User.js';

await mongoose.connect(keys.mongoURI);

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
    age: 35,
    hobbies: ['hiking', 'camping'],
    gender: 'male',
  },
]);

console.log(
  await User.aggregate([
    {
      $match: {
        $or: [{ name: 'Sam' }, { name: { $in: ['John', 'David'] } }],
        $or: [
          { hobbies: { $in: ['hiking', 'drawing'] } },
          { hobbies: 'football' },
        ],
        age: { $gt: 23, $lt: 40 },
      },
    },
  ])
);

process.exit();
