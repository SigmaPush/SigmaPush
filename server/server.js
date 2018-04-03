import express from 'express';
import expressGraphQL from 'express-graphql';
import mongoose from 'mongoose';

import models from './models/';
import schema from './schema/';
import { username, password } from './dbtest';

const MONGO_URI = `mongodb://${username}:${password}@ds127958.mlab.com:27958/sigmapushdb`;
if (!MONGO_URI) {
  throw new Error('You must provide a MongoLab URI');
}

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI);
mongoose.connection
  .once('open', () => console.log('Connected to MongoLab instance.'))
  .on('error', error => console.log('Error connecting to MongoLab:', error));

const app = express();

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true,
}));

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});

export default app;
