import { gql } from 'apollo-server';

export const TransactionType = gql`
  type Transaction {
    id: ID!
    # TODO: Make this work for any currency
    amount: Float!
  }
`;
