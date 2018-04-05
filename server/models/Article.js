import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ArticleSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  title: String,
  description: String,
  thumbnail: String,
  content: String,
  catalog: {
    type: Schema.Types.ObjectId,
    ref: 'catalog',
  },
  tags: [{
    type: Schema.Types.ObjectId,
    ref: 'tag',
  }],
  stats: {
    view: Number,
    favor: Number,
    thumbUp: Number,
  },
  // not determined
  topic:[],
});

export default mongoose.model('Article', ArticleSchema);
