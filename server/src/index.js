import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers } from './schema';
import services from './services';
import seedDatabase from './seedDatabase';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({
    ...services,
  }),
});

if (false) {
  seedDatabase();
}

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
