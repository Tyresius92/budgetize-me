import { gql } from 'apollo-server';

export const UserType = gql`
  extend type Query {
    me: User
  }

  extend type Mutation {
    signUp(input: NewUserInput!): UserLoginPayload!
    signIn(input: UserLoginInput!): UserLoginPayload!
    signOut: Boolean!
  }

  type User {
    id: Int!
    username: String!
    email: EmailAddress!
    transactions: [Transaction!]!
  }
`;

export const UserResolvers = {
  Query: {
    me: () => ({ id: 1, username: 'tyresius', email: 'hello@goodbye.com' }),
  },

  Mutation: {
    signUp: (parent, { input }, { userService }) =>
      userService.signUp(input.username, input.email, input.password),
    signIn: (parent, { input }, { userService }) =>
      userService.signIn(input.login, input.password),
  },

  User: {
    transactions: () => [],
  },
};
