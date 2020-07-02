import { gql } from 'apollo-server';

export const UserLoginInputType = gql`
  input UserLoginInput {
    # login === (email || username)
    login: String!
    password: String!
  }
`;
