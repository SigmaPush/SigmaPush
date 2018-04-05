import mongoose from 'mongoose';
import { GraphQLObjectType, GraphQLList } from 'graphql';

import CatalogType from './CatalogType';

const Catalog = mongoose.model('Catalog');
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    catalogs: {
      type: new GraphQLList(CatalogType),
      resolve() {
        return Catalog.find({});
      },
    },
  },
});

export default RootQuery;
