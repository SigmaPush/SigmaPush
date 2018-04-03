import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  email: String,
  password: String,
  name: {
    first: String, 
    middle: String,
    last: String,
  },
  description: String,
  //  maybe Enum is better?
  type: Number,
  avatar: String,
  topicTree: {},
  stats: {
    numOfSub: Number,
    numOfPush: Number,
  },
});

export default mongoose.model('User', UserSchema);
