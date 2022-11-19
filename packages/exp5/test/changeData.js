import assert, { strictEqual } from 'assert';
import mongoose from 'mongoose';
import { createUser } from './helper.js';

describe('Change Data', () => {
  let user;

  beforeEach(async () => {
    user = await createUser();
  });

  it('edits user', async () => {
    const newName = 'new name';
    const editedUser = await mongoose
      .model('user')
      .findByIdAndUpdate(user._id, { name: newName });
    const searchedAfterEditedUser = await mongoose
      .model('user')
      .findById(user._id);

    assert.strictEqual(user.name, 'john');
    assert.strictEqual(editedUser.name, 'john');
    assert.strictEqual(searchedAfterEditedUser.name, 'new name');
  });
});
