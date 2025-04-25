import { Schema, model } from 'mongoose';

const productSchema = new Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  material: { type: String, required: true },
  image: { type: String } // image URL or base64
}, { timestamps: true });

export default model('Product', productSchema);
