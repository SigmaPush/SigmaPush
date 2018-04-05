import mongoose from 'mongoose';
import { GraphQLObjectType, GraphQLString } from 'graphql';

import CatalogType from './CatalogType';

const Catalog = mongoose.model('Catalog');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addCatalog: {
      type: CatalogType,
      args: {
        name: { type: GraphQLString },
      },
      resolve(parentValue, { name }) {
        return (new Catalog({ name })).save();
      },
    }
  },
});

export default mutation;
