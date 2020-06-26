import { gql } from 'apollo-server';

export const UserLoginInputType = gql`
  input UserLoginInput {
    emailOrUsername: String!
    password: String!
  }
`;
