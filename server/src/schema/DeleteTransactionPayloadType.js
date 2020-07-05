import { gql } from 'apollo-server';

export const DeleteTransactionPayloadType = gql`
  type DeleteTransactionPayload {
    isDeleteSuccessful: Boolean!
  }
`;
