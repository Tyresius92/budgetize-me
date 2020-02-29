import { gql } from "apollo-server-express";

const transactionSchema = gql`
  extend type Query {
    transaction(id: ID!): Transaction!

    transactions: [Transaction!]!
  }

  extend type Mutation {
    createTransaction(
      amount: Float!
      category: String!
      date: DateTime!
    ): Transaction!

    deleteTransaction(id: ID!): Boolean!

    updateTransaction(
      id: ID!
      amount: Float!
      date: DateTime!
      category: String!
    ): Transaction!
  }

  type Transaction {
    id: ID!
    amount: Float!
    date: DateTime!
    category: String!
    user: User!
  }
`;

export default transactionSchema;
