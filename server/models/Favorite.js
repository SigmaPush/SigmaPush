import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const FavoriteSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  article: {
    type: Schema.Types.ObjectId,
    ref: 'article',
  },
});

export default mongoose.model('Favorite', FavoriteSchema);
