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
    me: (parent, args, { me }) => me,
  },

  Mutation: {
    signUp: (
      parent,
      { input: { username, email, password } },
      { userService, secret }
    ) =>
      userService.signUp(
        {
          username,
          email,
          password,
        },
        secret
      ),
    signIn: (parent, { input }, { userService, secret }) =>
      userService.signIn(input.login, input.password, secret),
  },

  User: {
    transactions: (user, args, { userService }) =>
      userService.fetchTransactionsByUserId(user.id),
  },
};
