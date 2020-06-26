import { gql } from 'apollo-server';

export const NewUserInputType = gql`
  input NewUserInput {
    email: EmailAddress!
    username: String!
    password: String!
  }
`;
