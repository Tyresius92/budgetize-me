import { gql } from 'apollo-server';

export const NewTransactionInputType = gql`
  input NewTransactionInput {
    amount: Float!
    userId: ID!
  }
`;
