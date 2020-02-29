import { gql } from "apollo-server-express";

const messageSchema = gql`
  extend type Query {
    message(id: ID!): Message!
    messages: [Message!]!
  }

  extend type Mutation {
    createMessage(text: String!): Message!
    deleteMessage(id: ID!): Boolean!
    updateMessage(id: ID!, newText: String!): Message!
  }

  type Message {
    id: ID!
    text: String!
    user: User!
  }
`;

export default messageSchema;
