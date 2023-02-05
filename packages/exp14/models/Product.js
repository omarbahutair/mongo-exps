import mongoose from 'mongoose'

const ProductSchema = mongoose.Schema({
	images: [
		{
			name: String,
			mimeType: String,
			color: String,
		}
	]
});

mongoose.model('product', ProductSchema);

