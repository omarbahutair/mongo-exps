import mongoose from 'mongoose';

const Product = mongoose.model('product');

describe('Update Images', () => {
  let product;

  beforeEach(async () => {
    product = await Product.create({
      images: [],
    });
  });

  it('Add image', async () => {
    const newProduct = await Product.findOneAndUpdate(
      {
        _id: product._id,
      },
      {
        $push: {
          images: { mimeType: 'image/jpg', name: '/path', color: 'black' },
        },
      },
      {
        new: true,
      }
    );

    console.log(newProduct);
  });
});
