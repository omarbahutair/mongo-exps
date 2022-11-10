import assert from 'assert';
import mongoose from 'mongoose';

const User = mongoose.model('user');

describe('Aggregate pipline', () => {
  it('Searchs for users using aggregate pipline', async () => {
    const users = await User.aggregate([
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
    ]);

    users.forEach((user) => {
      assert(user.name === 'Sam' || ['John', 'David'].includes(user.name));
      assert(
        user.hobbies.includes('hiking') ||
          user.hobbies.includes('drawing') ||
          user.hobbies.includes('football')
      );
      assert(user.age > 23 && user.age < 40);
    });
  });

  it('Get average of age using $group stage', async () => {
    const users = await User.aggregate([
      {
        $match: { age: { $gte: 10 } },
      },
      {
        $group: {
          _id: '$name',
          ageAvg: { $avg: '$age' },
        },
      },
    ]);

    users.forEach((user) => {
      assert([61 / 3, 24].includes(user.ageAvg));
      assert(['John', 'Sam'].includes(user._id));
    });
  });
});
