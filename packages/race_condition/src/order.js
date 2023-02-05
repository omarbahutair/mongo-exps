import mongoose from 'mongoose';

const Product = mongoose.model('product');

export async function orderWithRace(productId, amount) {
  const product = await Product.findOne({
    _id: productId,
    quantity: { $gte: amount },
  });

  if (!product)
    console.log('sorry, we ran out of this product, (orderWithRace)');

  product.quantity -= amount;

  await product.save();
}

export async function order(productId, amount) {
  const product = await Product.findOneAndUpdate(
    {
      _id: productId,
      quantity: { $gte: amount },
    },
    {
      $inc: { quantity: -amount },
    },
    {
      new: true,
    }
  );

  if (!product) console.log('sorry we ran out of this product, (order)');
}
