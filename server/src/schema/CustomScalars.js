import { gql } from 'apollo-server';
import { EmailAddressResolver, DateTimeResolver } from 'graphql-scalars';

export const CustomScalars = gql`
  scalar EmailAddress
  scalar DateTime
`;

export const CustomScalarsResolvers = {
  EmailAddress: EmailAddressResolver,
  DateTime: DateTimeResolver,
};
