import assert from 'assert';
import mongoose from 'mongoose';

const Product = mongoose.model('product');

describe('Search By Size', () => {
  it('Searches for products for md size', async () => {
    const products = await Product.aggregate([
      {
        $match: { sizes: { $elemMatch: { size: 'md', qty: { $gt: 0 } } } },
      },
    ]);

    products.forEach((product) => {
      let doesContainMdSize = false;

      product.sizes.forEach((size) => {
        doesContainMdSize = doesContainMdSize || size.size === 'md';
      });

      assert(doesContainMdSize);
    });
  });
});
