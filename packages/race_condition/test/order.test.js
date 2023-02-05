import mongoose from 'mongoose';
import assert from 'assert';
import async from 'async';

const Product = mongoose.model('product');

describe('Race condition test', () => {
  let aboveProduct;

  beforeEach(async () => {
    aboveProduct = await Product.create({
      title: 'test product',
      price: 10,
      quantity: 2,
    });
  });

  it('Race condition', (done) => {
    async.parallel(
      [
        async () => {
          const product = await Product.findOne({
            _id: aboveProduct._id,
            quantity: { $gte: 1 },
          });
          product.quantity -= 1;
          await product.save();
        },
        async () => {
          const product = await Product.findOne({
            _id: aboveProduct._id,
            quantity: { $gte: 1 },
          });
          product.quantity -= 1;
          await product.save();
        },
      ],
      function (err, results) {
        if (err) return done(err);

        Product.findById(aboveProduct._id).then((p) => {
          console.log(`race condition quantity: ${p.quantity}`);
          done();
        });
      }
    );
  });

  it('Avoid Race Condition', (done) => {
    const order = async (id, amount) => {
      await Product.updateMany(
        { _id: id, quantity: { $gte: amount } },
        { $inc: { quantity: -amount } },
        { new: true }
      );
    };

    async.parallel(
      [
        async () => order(aboveProduct._id, 1),
        async () => order(aboveProduct._id, 1),
      ],
      function (err) {
        if (err) done(err);

        Product.findById(aboveProduct._id).then((p) => {
          console.log(`without race condition quantitoy: ${p.quantity}`);
          done();
        });
      }
    );
  });
});
