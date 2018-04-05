import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const CommentSchema = new Schema({
  article: {
    type: Schema.Types.ObjectId,
    ref: 'article',
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'comment',
  }],
  content: String,
});

export default mongoose.model('Comment', CommentSchema);
