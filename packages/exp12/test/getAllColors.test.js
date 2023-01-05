import mongoose from 'mongoose';

const Product = mongoose.model('product');

describe('Gets All Colors: ', () => {
  beforeEach(async () => {
    await Product.insertMany([
      {
        title: 'p1',
        brand: 'b1',
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
        brand: 'b2',
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
    const [filters] = await Product.aggregate([
      {
        $unwind: '$combinations',
      },
      {
        $group: {
          _id: 'filters',
          colors: { $addToSet: '$combinations.color' },
          sizes: { $addToSet: '$combinations.size' },
          brands: { $addToSet: '$brand' },
        },
      },
    ]);

    console.log(filters);
  });

  it('GETS all sizes', async () => {
    const [{ sizes }] = await Product.aggregate([
      {
        $unwind: '$combinations',
      },
      {
        $group: {
          _id: '*',
          sizes: { $addToSet: '$combinations.size' },
        },
      },
    ]);

    console.log(sizes);
  });

  it('GETS all brands', async () => {
    const [{ brands }] = await Product.aggregate([
      {
        $group: {
          _id: '*',
          brands: { $addToSet: '$brand' },
        },
      },
    ]);

    console.log(brands);
  });
});
