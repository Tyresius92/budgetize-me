import { gql } from 'apollo-server';

export const RootQueryType = gql`
  type Query {
    _empty: String
  }
`;

export const RootQueryResolvers = {};
