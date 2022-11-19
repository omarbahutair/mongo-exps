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
});
