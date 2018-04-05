import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const TagSchema = new Schema({
  name: String,
});

export default mongoose.model('Tag', TagSchema);
