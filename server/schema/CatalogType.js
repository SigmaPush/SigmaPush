import mongoose from 'mongoose';
import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
} from 'graphql';

const Catalog = mongoose.model('Catalog');

const CatalogType = new GraphQLObjectType({
  name: 'CatalogType',
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
  },
});

export default CatalogType;