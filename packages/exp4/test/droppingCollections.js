import mongoose from 'mongoose';

const User = mongoose.model('user');

describe('Drop collection before manipulating the database', () => {
  // beforeEach(async () => {
  //   User.collection.drop();
  // });

  it('adds a users', async () => {
    await User.collection.drop();
    await User.create({
      name: 'john',
      age: 19,
    });
  });
});
