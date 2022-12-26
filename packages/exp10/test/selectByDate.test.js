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
});
