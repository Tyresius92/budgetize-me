import { gql } from "apollo-server-express";

const messageSchema = gql`
  extend type Query {
    me: User
    user(id: ID!): User
    users: [User!]
  }

  extend type Mutation {
    signUp(username: String!, email: String!, password: String!): Token!
  }

  type Token {
    token: String!
  }

  type User {
    id: ID!
    username: String!
    email: String!
    messages: [Message!]
    transactions: [Transaction!]
  }
`;

export default messageSchema;
