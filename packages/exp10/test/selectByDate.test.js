import mongoose from 'mongoose';

const User = mongoose.model('user');

describe('Selects based on date', () => {
  it('Sorts users by date', async () => {
    console.log(
      await User.aggregate([
        {
          $sort: { dateCreated: -1 },
        },
        {
          $skip: 1,
        },
      ])
    );
  });

  it('Sorts users be sold', async () => {
    console.log(
      await User.aggregate([
        {
          $sort: { age: 1 },
        },
      ])
    );
  });
});
