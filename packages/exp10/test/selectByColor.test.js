import mongoose from 'mongoose';

const Product = mongoose.model('product');

describe('', () => {
  beforeEach(async () => {
    await Product.insertMany([
      {
        title: 'p1',
        colors: ['black', 'red'],
      },
      {
        title: 'p2',
        colors: ['red', 'cyan', 'green'],
      },
    ]);
  });

  it('', async () => {
    console.log(
      await Product.aggregate([
        {
          $match: { colors: 'red' },
        },
      ])
    );
  });
});
