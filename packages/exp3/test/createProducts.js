import mongoose from 'mongoose';

const Product = mongoose.model('product');

describe('Create Products', () => {
  it('create products - normal', async () => {
    await Product.create({
      title: 'Jeans',
      price: { curr1: 20, curr2: 18 },
    });
  });

  it('create products - invalid object prop', async () => {
    await Product.create({
      title: 'Jeans',
      price: { curr3: 20 },
    });
  });

  it('create products with colors - array field', async () => {
    await Product.create({
      title: 'Jeans',
      price: { curr1: 18 },
      colors: [{ color: 'blue', qty: 12 }],
    });
  });

  it('create products with color - miss one field', async () => {
    try {
      await Product.create({
        title: 'Jeans',
        price: { curr1: 12 },
        colors: [{ color: 'black' }],
      });

      throw new Error('qty is required');
    } catch (err) {}
  });
});
