import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const CatalogSchema = new Schema({
  name: String,
});

export default mongoose.model('Catalog', CatalogSchema);
