import 'dotenv/config';
import { ApolloServer, AuthenticationError } from 'apollo-server';
import { typeDefs, resolvers } from './schema';
import jwt from 'jsonwebtoken';
import services from './services';
import seedDatabase from './seedDatabase';

const getCurrentUser = async (req, secret) => {
  const token = req.headers.authorization || '';

  if (token) {
    try {
      return await jwt.verify(token, secret);
    } catch (err) {
      throw new AuthenticationError('Your session expired. Sign in again');
    }
  }

  return null;
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => ({
    secret: process.env.SECRET,
    me: await getCurrentUser(req, process.env.SECRET),
    ...services,
  }),
});

// eslint-disable-next-line no-constant-condition
if (false) {
  seedDatabase();
}

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
