import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import async from 'async';
import '../models/Product.js';
import '../models/User.js';

async function main(done) {
  // connect to a mock database
  const mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());

  // define the collections
  const User = mongoose.model('user');
  const Product = mongoose.model('product');

  // create few products
  const products = await Product.insertMany([
    {
      title: 'test product 1',
      combinations: [
        {
          size: 'large',
          color: {
            value: '#000000',
            name: 'white',
          },
          qty: 2,
        },
        {
          size: 'md',
          color: {
            value: '#00FF00',
            name: 'green',
          },
          qty: 2,
        },
      ],
      price: 10,
    },
    {
      title: 'test product 2',
      combinations: [
        {
          size: 'sm',
          color: {
            value: '#FF0000',
            name: 'red',
          },
          qty: 2,
        },
        {
          size: 'xl',
          color: {
            value: '#0000FF',
            name: 'blue',
          },
          qty: 2,
        },
      ],
      price: 10,
    },
    {
      title: 'test product 3',
      combinations: [
        {
          size: 'lg',
          color: {
            value: '#FFFF00',
            name: 'maroon',
          },
          qty: 2,
        },
        {
          size: 'xs',
          color: {
            value: '#0000FF',
            name: 'blue',
          },
          qty: 2,
        },
      ],
      price: 10,
    },
  ]);

  // create user
  const user = await User.create({
    email: 'user@email.com',
    cart: products.slice(0, 2).map((p) => ({
      product: p._id.toString(),
      size: p.combinations[0].size,
      color: p.combinations[0].color.name,
      qty: 1,
    })),
  });

  const order = async (user) => {
    const bulkOps = user.cart.map((p) => ({
      updateOne: {
        filter: {
          _id: p.product.toString(),
          'combinations.size': p.size,
          'combinations.color.name': p.color,
          'combinatiosn.qty': { $gte: p.qty },
        },
        update: { $inc: { 'combinations.$.qty': -p.qty } },
      },
    }));

    const result = await Product.bulkWrite(bulkOps);
    (await Product.find()).forEach((p) => console.log(p));
  };

  await order(user);

  done();
}

main(process.exit);
