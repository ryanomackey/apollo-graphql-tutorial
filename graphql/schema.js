import { makeExecutableSchema } from 'graphql-tools';

import resolvers from './resolvers';

const typeDefs = `
  type Pokemon {
    id: ID
    name: String
  }

  type Query {
    pokemon(name: String!): Pokemon
  }
`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
