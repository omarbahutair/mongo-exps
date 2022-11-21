import assert from 'assert';
import mongoose from 'mongoose';

const Product = mongoose.model('product');

describe('Find Product', () => {
  it('sums qtys in colors before searching', async () => {
    const products = await Product.aggregate([
      {
        $match: {
          'sizes.*.colors.*.qty': { $gt: 0 },
        },
      },
    ]);

    console.log(products);
  });
});
