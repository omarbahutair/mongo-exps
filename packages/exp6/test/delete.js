import assert from 'assert';
import mongoose from 'mongoose';

const User = mongoose.model('user');

describe('Delete', () => {
  let user;

  beforeEach(async () => {
    await User.collection.drop();
    user = await User.create({ name: 'john', age: 20 });
  });

  it('Deletes a user', async () => {
    const deletedUser = await User.findByIdAndDelete(user._id);

    assert.strictEqual(deletedUser._id.toString(), user._id.toString());
  });

  it('Deletes multiple users', async () => {
    const users = await User.insertMany([
      {
        name: 'first',
        age: 11,
      },
      {
        name: 'second',
        age: 24,
      },
      {
        name: 'third',
        age: 16,
      },
    ]);

    const usersIds = users.map((user) => user._id);

    const deletedUsers = await User.deleteMany(
      { _id: { $in: usersIds } },
      { returnDocument: true }
    );
    console.log(deletedUsers);
  });
});
