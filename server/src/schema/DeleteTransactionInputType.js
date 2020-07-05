import { gql } from 'apollo-server';

export const DeleteTransactionInputType = gql`
  input DeleteTransactionInput {
    transactionId: ID!
  }
`;
