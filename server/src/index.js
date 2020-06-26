import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers } from './schema';
import { services } from './services';

const server = new ApolloServer({ typeDefs, resolvers, ...services });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
