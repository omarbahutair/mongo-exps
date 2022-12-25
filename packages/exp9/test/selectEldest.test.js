import mongoose from 'mongoose';

const User = mongoose.model('user');

describe('Selects eldest people', () => {
  it('eldest 5', async () => {
    console.log(
      await User.aggregate([
        {
          $sort: { age: -1 },
        },
      ])
    );
    console.log(
      await User.aggregate([
        {
          $sort: { age: -1 },
        },
        {
          $skip: 5,
        },
        {
          $limit: 5,
        },
      ])
    );
  });
});
