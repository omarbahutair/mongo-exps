// import assert from 'assert';
// import mongoose from 'mongoose';
// import async from 'async';
// import { order, orderWithRace } from '../src/order.js';

// const Product = mongoose.model('product');

// describe('Race Condition', () => {
//   let product;

//   beforeEach(async () => {
//     product = await Product.create({
//       title: 'test product',
//       price: 10,
//       quantity: 2,
//     });
//   });

//   it('Orders products', async () => {
//     await Promise.all([order(product._id, 2), order(product._id, 2)]);

//     const orderedProduct = await Product.findById(product._id);

//     console.log(orderedProduct);

//     assert.strictEqual(orderedProduct.quantity, 0);
//   });

//   it('Orders products with Race', async () => {
//     async.parallel(
//       [
//         () => orderWithRace(product._id, 2),
//         () => orderWithRace(product._id, 2),
//       ],
//       async (err) => {
//         if (err) console.log('err');

//         const orderedProduct = await Product.findById(product._id);

//         console.log(`ordered products: ${orderedProduct}`);
//       }
//     );
//   });
// });
