import mongoose from 'mongoose';

const Product = mongoose.model('product');

describe('Deletes an image', () => {
  let product;

  beforeEach(async () => {
    product = await Product.create({
      images: [
        {
          color: 'black',
          mimeType: 'image/png',
          name: 'planet',
        },
      ],
    });
  });

  it('deletes an image', async () => {
    const newProd = await Product.findByIdAndUpdate(
      product._id,
      {
        $pull: { images: { color: 'black' } },
      },
      { new: true }
    );

    console.log(newProd);
  });
});
