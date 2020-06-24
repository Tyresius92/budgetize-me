import { gql } from 'apollo-server';

export const ExampleQueryType = gql`
  extend type Query {
    helloWorld: HelloWorld
  }

  type HelloWorld {
    id: Int!
    hello: String!
  }
`;

export const ExampleQueryResolvers = {
  Query: {
    helloWorld: () => ({
      id: 1,
      hello: 'Hello World!',
    }),
  },

  HelloWorld: {
    id: parent => parent.id,
    hello: parent => parent.hello,
  },
};
