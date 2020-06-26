import { gql } from 'apollo-server';

export const UserLoginPayloadType = gql`
  type UserLoginPayload {
    user: User!
    token: String!
  }
`;
