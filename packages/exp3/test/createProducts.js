import assert from 'assert';
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
});
