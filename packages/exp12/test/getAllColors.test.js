import mongoose from 'mongoose';

const Product = mongoose.model('product');

describe('Gets All Colors: ', () => {
  beforeEach(async () => {
    await Product.insertMany([
      {
        title: 'p1',
        combinations: [
          {
            size: 'l',
            color: 'black',
            qty: 3,
          },
          {
            size: 'm',
            color: 'red',
            qty: 1,
          },
        ],
      },
      {
        title: 'p2',
        combinations: [
          {
            size: 'sm',
            color: 'blue',
            qty: 3,
          },
          {
            size: 'md',
            color: 'black',
            qty: 1,
          },
        ],
      },
    ]);
  });

  it('Gets All Colors', async () => {
    const [{ colors }] = await Product.aggregate([
      {
        $unwind: '$combinations',
      },
      {
        $group: {
          _id: '_id',
          colors: { $addToSet: '$combinations.color' },
        },
      },
    ]);

    console.log(colors);
  });
});
