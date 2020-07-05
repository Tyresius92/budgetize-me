import { gql } from 'apollo-server';

export const TransactionType = gql`
  extend type Mutation {
    createTransaction(input: NewTransactionInput!): Transaction!
    deleteTransaction(input: DeleteTransactionInput!): DeleteTransactionPayload!
  }

  type Transaction {
    id: ID!
    # TODO: Make this work for any currency
    amount: Float!
    user: User!
  }
`;

export const TransactionResolvers = {
  Mutation: {
    createTransaction: (parent, { input }, { transactionService }) =>
      transactionService.createTransaction(input.amount, input.userId),
    deleteTransaction: (parent, { input }, { transactionService, me }) =>
      transactionService.deleteTransaction(input.transactionId, me.id),
  },

  Transaction: {
    user: (transaction, args, { userService }) =>
      userService.fetchUserById(transaction.userId),
  },
};
