import { gql } from 'apollo-server';

export const RootMutationType = gql`
  type Mutation {
    _empty: String
  }
`;

export const RootMutationResolvers = {};
